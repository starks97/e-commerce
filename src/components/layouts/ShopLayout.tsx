import  Head  from "next/head";
import React from "react";

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

      <main style={{ margin: "20px auto", padding: "0px 20px" }}>
        {children}
      </main>

      <footer>{/*footer*/}</footer>
    </>
  );
}
