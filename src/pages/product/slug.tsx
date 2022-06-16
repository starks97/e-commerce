import React from "react";

import { ShopLayout } from "../../components/layouts";
import { Navbar } from "../../components/navbar";
import { initialData } from "../../database/products";
import { ProductSelected } from "../../components/products";

const product = initialData.products[0];

export default function slug() {
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Navbar />
      <ProductSelected />
    </ShopLayout>
  );
}
