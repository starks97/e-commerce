import { DataUser } from "../../../../app/backend/data_user";
import { methodSwitcher, Token } from "../../../../app/utils";

export default methodSwitcher({
  PUT: async (req, res) => {
    try {
      if (!req.body || typeof req.body !== "object") {
        return res
          .status(404)
          .json({ message: "bad request, check your request" });
      }

      const { id = "" } = req.query as { id: string };

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
      console.log(req.body);

      const data = await DataUser.UpdateDataUser(id, {
        name,
        lastname,
        telephone,
        city,
        address,
        zipCode,
        country,
        address2,
      });

      if (!data) {
        return res.status(404).json({ message: "data not updated" });
      }

      return res.status(200).json(data);
    } catch (e) {
      return console.log(e);
    }
  },
});
