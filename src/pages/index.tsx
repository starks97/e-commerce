<<<<<<< HEAD
import type { NextPage, GetServerSideProps } from "next";

import { Product } from "@prisma/client";

import { ShopLayout } from "../components/layouts";
import { Navbar } from "../components/navbar";
import { ProductCheck, ProductList } from "../components/products";
import { searchProducts, getAllProducts } from "../app/backend/product";

interface Props {
  products: Product[];
  q: string;
}

const Home: NextPage<Props> = ({ products, q }) => {
  //const { products, isLoading } = useProducts("/products");
  return (
    <ShopLayout title={`Teslo | Shop `} pageDescription="Welcome our shop">
      <Navbar />

      {products.length !== 0 ? (
        <ProductList title={`${q} Products`} products={products} />
      ) : (
        <ProductCheck q={`${q}`} />
      )}
=======
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
>>>>>>> 779b262 (merge)
    </ShopLayout>
  );
};

export default Home;
<<<<<<< HEAD

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { q = "" } = query as { q: string };

  if (q.length === 0) {
    const Allproducts: Product[] =
      (await getAllProducts()) as unknown as Product[];
    return { props: { products: Allproducts, q: "All" } };
  }

  const products: Product[] = (await searchProducts(
    `${q}`
  )) as unknown as Product[];

  return {
    props: {
      products,
      q,
    },
  };
};
=======
>>>>>>> 779b262 (merge)
