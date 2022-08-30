import { NextApiResponse } from "next";

import { methodSwitcher } from "../../../utils";

import { GenerateJWT, UserAuth } from "../../../app/backend/auth";

type Data =
  | { message: string }
  | {
      token: string;
      user: {
        id: string;
        email: string;
        name: string;
        role: string;
      };
    };

export default methodSwitcher({
  async GET(req, res: NextApiResponse<Data>) {
    const { Ecommerce_token = "" } = req.cookies;

    if (!Ecommerce_token) {
      res.statusCode = 404;
      res.send({ message: "Error auth" });
      return;
    }

    try {
      const decoded = GenerateJWT.decoded(Ecommerce_token);

      const user = await UserAuth.verifyId(await decoded);

      if (!user) {
        res.statusCode = 404;
        res.send({ message: "there is not user with that id" });
        return;
      }

      const { role, name, email, id } = user;
      const new_token = new GenerateJWT(
        await decoded,
        user.email
      ).generateJWT();

      return res
        .status(200)
        .json({ token: new_token, user: { name, email, role, id } });
    } catch (e) {
      return console.log(e);
    }
  },
});
