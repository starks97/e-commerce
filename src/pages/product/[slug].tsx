import React from "react";

import { GetServerSideProps, NextPage } from "next";

import { Product } from "@prisma/client";

import { ShopLayout } from "../../components/layouts";
import { Navbar } from "../../components/navbar";
import { ProductSelected } from "../../components/products";

import { getAllProductsBySlug } from "../../app/backend/product/Product";

interface Props {
  product: Product;
}

const ProductPage: NextPage<Props> = ({ product }: Props) => {
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Navbar />
      <ProductSelected product={product} />
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const products: Product[] = (await getAllProductsBySlug(
    slug
  )) as unknown as Product[];

  if (!products) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      product: products[0],
    },
  };
};
export default ProductPage;
