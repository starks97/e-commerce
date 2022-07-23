import type { NextPage } from "next";

import { ShopLayout } from "../../components/layouts";
import { Navbar } from "../../components/navbar";
import { ProductList } from "../../components/products";
import { useProducts } from "../../hooks";
import { FullScreenLoading } from "../../components/ui";

const WomenPage: NextPage = () => {
  const { products, isLoading } = useProducts("/products?gender=women");

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <ShopLayout title="Teslo | Shop - Women" pageDescription="Welcome our shop">
      <Navbar />

      {isLoading ? <FullScreenLoading /> : <ProductList children="Women Products" products={products} />}
    </ShopLayout>
  );
};

export default WomenPage;