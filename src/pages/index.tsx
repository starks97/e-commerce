import type { NextPage, GetServerSideProps } from "next";

import { ShopLayout } from "../components/layouts";
import { Navbar } from "../components/navbar";
import { ProductList } from "../components/products";
import { searchProducts } from "../app/backend/product";
import { Product } from "@prisma/client";

interface Props {
  products: Product[];
  q: string;
}

const Home: NextPage<Props> = ({ products, q }) => {
  //const { products, isLoading } = useProducts("/products");

  return (
    <ShopLayout title={`Teslo | Shop  `} pageDescription="Welcome our shop">
      <Navbar />

      <ProductList title={`${q} products`} products={products} />
    </ShopLayout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { q = "" } = query as { q: string };
  const products: Product[] = (await searchProducts(
    `${q}`
  )) as unknown as Product[];

  if (q.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      products,
      q
    },
  };
};
