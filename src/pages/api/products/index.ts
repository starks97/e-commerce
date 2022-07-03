import { methodSwitcher } from "../../../utils";
import { getAllProducts } from "../../../app/backend/Product/products";

export default methodSwitcher({
  GET: async (req, res) => {
    const products = await getAllProducts();

    if (!products) {
      res.status(404).send({
        error: "Not found",
      });
      return;
    }

    res.status(200).json(products);
  },
});
