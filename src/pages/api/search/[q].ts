import { Product } from "@prisma/client";

import { methodSwitcher } from "../../../utils";

import {
  searchProducts,
  getAllProducts,
} from "../../../app/backend/product/Product";

export default methodSwitcher({
  GET: async (req, res) => {
    const { q = "" } = req.query;
    const products = await searchProducts(`${q}`);

    if (Array.isArray(q) || q.length === 0) {
      return res.status(404).json({ message: "bad request" });
    }
    return res.status(200).json(products);
  },
});
