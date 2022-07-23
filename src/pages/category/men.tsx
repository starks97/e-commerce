import type { NextPage } from "next";

import { ShopLayout } from "../../components/layouts";
import { Navbar } from "../../components/navbar";
import { ProductList } from "../../components/products";
import { useProducts } from "../../hooks";
import { FullScreenLoading } from "../../components/ui";

const MenPage: NextPage = () => {
  const { products, isLoading } = useProducts("/products?gender=men");

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <ShopLayout title="Teslo | Shop - Men" pageDescription="Welcome our shop">
      <Navbar />

      {isLoading ? (
        <FullScreenLoading />
      ) : (
        <ProductList children="Men Products" products={products} />
      )}
    </ShopLayout>
  );
};

export default MenPage;
