import Head from "next/head";
import React from "react";

import { Product } from "@prisma/client";

interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
  children?: React.ReactNode;
}

export default function ShopLayout({
  title,
  pageDescription,
  imageFullUrl,
  children,
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={pageDescription} />
        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>

      <nav>{/*navbar*/}</nav>

      <main>{children}</main>

      <footer>{/*footer*/}</footer>
    </>
  );
}
