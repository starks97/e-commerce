import { NextApiResponse } from "next";
import { UserAuth } from "../../../app/backend/auth";

import { methodSwitcher } from "../../../utils";

import { Token} from "../../../utils";

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
  async GET(req, res: NextApiResponse<Data>) {
    const { Ecommerce_token = "" } = req.cookies;

    if (!Ecommerce_token) {
      res.statusCode = 404;
      res.send({ message: "Error auth" });
      return;
    }

    try {
      const decoded = await Token.decoded(Ecommerce_token);

      const user = await UserAuth.verifyId(decoded);

      if (!user) {
        res.statusCode = 404;
        res.send({ message: "there is not user with that id" });
        return;
      }

      const { role, name, email } = user;
      const new_token = await  new Token(decoded, user.email).generateJWT();

      return res
        .status(200)
        .json({ token: new_token, user: { name, email, role} });
    } catch (e) {
      return console.log(e);
    }
  },
});
