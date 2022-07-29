import { Product } from "@prisma/client";

import { methodSwitcher } from "../../../utils";

import { getAllProductsBySlug } from "../../../app/backend/product/Product";

export default methodSwitcher({
  GET: async (req, res) => {
    const { slug } = req.query;

    const product = await getAllProductsBySlug(`${slug}`);

    if (!product || product.length === 0 || product == undefined) {
      return res.status(404).json({ message: "product not found" });
    }

    return res.status(200).json(product);
  },
});
