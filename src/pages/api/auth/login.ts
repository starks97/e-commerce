import { methodSwitcher } from "../../../utils";

import { UserAuth } from "../../../app/backend/auth";

import { GenerateJWT } from "../../../app/backend/auth";
import { NextApiResponse } from "next";

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

      const { email = "", password = "" }: { email: string; password: string } =
        req.body;

      const user = await UserAuth.login(email, password);

      if (!user) {
        return res
          .status(400)
          .json({ message: "Email or password are not valid" });
      }

      const { role, name } = user;

      const token = new GenerateJWT(user.id, user.email).generateJWT();

      if (!token) {
        return res.status(401).json({ message: "invalid token" });
      }
      const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toString();

      res.setHeader(
        "Set-Cookie",
        `Ecommerce_token=${token}; Path=/; HttpOnly; Expires=${expires}; SameSite=Strict`
      );

      return res.status(200).json({ token, user: { email, name, role } });
    } catch (e) {
      console.log(e);
    }
  },
});
