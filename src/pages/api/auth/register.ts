import { NextApiResponse } from "next";

import { methodSwitcher } from "../../../utils";

import { GenerateJWT, UserAuth } from "../../../app/backend/auth";
import { Prisma } from "@prisma/client";

import { isValidEmail } from "../../../utils";

type Data =
  | { message: string }
  | {
      token: string;
      user: {
        email: string;
        name: string;
        role: string;
      };
    };

export default methodSwitcher({
  POST: async (req, res: NextApiResponse<Data>) => {
    try {
      if (!req.body || typeof req.body !== "object") {
        return res.status(404).json({ message: "bad request" });
      }

      const {
        email = "",
        password = "",
        name = "",
      }: { email: string; password: string; name: string } = req.body;

      if (password.length < 6) {
        return res
          .status(400)
          .json({ message: "Password must be at least 6 characters long" });
      }

      if (name.length < 3) {
        return res
          .status(400)
          .json({ message: "Name must be at least 3 characters long" });
      }

      if (!isValidEmail(email)) {
        return res.status(400).json({ message: "Email format is not valid " });
      }

      const user = await UserAuth.registerUser(req.body);

      if (!user) {
        return res.status(400).json({ message: "email already exists" });
      }

      const token = new GenerateJWT(user!.id, user!.email).generateJWT();

      //set token in cookies

      const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toString();

      res.setHeader(
        "Set-Cookie",
        `Ecommerce_token=${token}; Path=/; HttpOnly; Expires=${expires}; SameSite=Strict`
      );

      return res
        .status(200)
        .json({ token, user: { email, name, role: "client" } });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === "P2002") {
          return res.status(400).json({
            message:
              "There is a unique constraint violation, a new user cannot be created with this email",
          });
        }
      }
      throw e;
    }
  },
});
