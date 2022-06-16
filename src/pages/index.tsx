import type { NextPage } from "next";

import { ShopLayout } from "../components/layouts";
import { Navbar } from "../components/navbar";
import { initialData } from "../database/products";
import { ProductList } from "../components/products";

const Home: NextPage = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <ShopLayout title="Teslo | Shop" pageDescription="Welcome our shop">
      <Navbar />

      <ProductList products={initialData.products as any} />
    </ShopLayout>
  );
};

export default Home;
