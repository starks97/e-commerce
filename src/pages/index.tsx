import type { NextPage, GetServerSideProps } from "next";

import { Flex, Text, Box } from "@chakra-ui/react";

import { ShopLayout } from "../components/layouts";
import { Navbar } from "../components/navbar";
import { ProductCheck, ProductList } from "../components/products";
import { searchProducts, getAllProducts } from "../app/backend/product";
import { Product } from "@prisma/client";

interface Props {
  products: Product[];
  q: string;
}

class Capitalized {
  static of(arg: string) {
    return new Capitalized(arg);
  }

  constructor(private arg: string) {
    this.arg = arg.charAt(0).toUpperCase() + arg.slice(1);
  }
  toString() {
    return this.arg;
  }
}

const Home: NextPage<Props> = ({ products, q }) => {
  //const { products, isLoading } = useProducts("/products");

  return (
    <ShopLayout title={`Teslo | Shop `} pageDescription="Welcome our shop">
      <Navbar />

      {products.length !== 0 ? (
        <ProductList
          title={`${new Capitalized(q)} Products`}
          products={products}
        />
      ) : (
        <ProductCheck q={`${new Capitalized(q)}`} />
      )}
    </ShopLayout>
  );
};

export default Home;

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
