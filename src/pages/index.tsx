import type { NextPage, GetServerSideProps } from "next";

import { ShopLayout } from "../components/layouts";
import { Navbar } from "../components/navbar";
import { ProductList } from "../components/products";
import { searchProducts, getAllProducts } from "../app/backend/product";
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

      <ProductList title={`${q} Products`} products={products} />
    </ShopLayout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { q = "" } = query as { q: string };

  if (q.length === 0) {
    const Allproducts: Product[] =
      (await getAllProducts()) as unknown as Product[];
    return { props: { products: Allproducts, q: "All " } };
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
