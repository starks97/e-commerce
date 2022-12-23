import { DataUser } from "../../../app/backend/data_user";
import { methodSwitcher, Token } from "../../../app/utils";

export default methodSwitcher({
  POST: async (req, res) => {
    try {
      if (!req.body || typeof req.body !== "object") {
        return res.status(404).json({ message: "bad request" });
      }

      const {
        name = "",
        lastname = "",
        telephone = "",
        city = "",
        address = "",
        zipCode = "",
        country = "",
        address2 = "",
      } = req.body as {
        name: string;
        lastname: string;
        telephone: string;
        city: string;
        address: string;
        zipCode: string;
        country: string;
        address2: string;
      };

      const Ecommerce_token = req.cookies.Ecommerce_token;

      if (!Ecommerce_token) {
        res.statusCode = 404;
        res.send({ message: "Error token" });
        return;
      }

      const decoded = await Token.decoded(Ecommerce_token);

      const data_of_user = await DataUser.CreateData({
        name,
        lastname,
        telephone,
        city,
        address,
        zipCode,
        country,
        address2,
        userId: decoded,
      });

      if (!data_of_user) {
        return res.status(404).json({ message: "data not created" });
      }

      return res.status(200).json(data_of_user);
    } catch (e) {
      return console.log(e);
    }
  },

  GET: async (req, res) => {
    try {
      const Ecommerce_token = req.cookies.Ecommerce_token;

      if (!Ecommerce_token) {
        res.statusCode = 404;
        res.send({ message: "Error token" });
        return;
      }
      const decoded = await Token.decoded(Ecommerce_token);

      const data_of_user = await DataUser.GetData(decoded);

      if (!data_of_user) {
        return res
          .status(201)
          .json({ message: "data not found yet please enter your info" });
      }

      return res.status(200).json(data_of_user);
    } catch (e) {
      return console.log(e);
    }
  },
});
