import { methodSwitcher } from "../../../utils";
import { getAllProductsByGender } from "../../../app/backend/product";
import { shop_genders } from "../../../utils";
import { Genders } from "@prisma/client";
import {
  createDataProducts,
  getAllProducts,
} from "../../../app/backend/product/Product";

export default methodSwitcher({
  GET: async (req, res) => {
    const { gender = "all" } = req.query;

    if (Object.values(Genders).includes(gender as Genders)) {
      const products = await getAllProductsByGender(gender as Genders);
      return res.status(200).json(products);
    }

    if (gender === "all") {
      const allProducts = await getAllProducts();
      return res.status(200).json(allProducts);
    }

    return res.status(400).json({ message: "bad request" });
  },
});
