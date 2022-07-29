import React from "react";

import {
  GetServerSideProps,
  NextPage,
  GetStaticPaths,
  GetStaticProps,
} from "next";

import { Product } from "@prisma/client";

import { ShopLayout } from "../../components/layouts";
import { Navbar } from "../../components/navbar";
import { ProductSelected } from "../../components/products";

import {
  getAllProducts,
  getAllProductsBySlug,
} from "../../app/backend/product/Product";

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

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const products: Product[] = (await getAllProducts()) as unknown as Product[];
  //const getSlugs = products.map((product) => product.slug);
  return {
    paths: products.map(({ slug }) => ({ params: { slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params as { slug: string };

  const getProducts = await getAllProductsBySlug(slug);
  if (!getProducts) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      product: getProducts[0],
    },
  };
};

export default ProductPage;