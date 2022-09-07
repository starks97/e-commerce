import React from "react";

import Head from "next/head";

interface Props {
  title: string;
  children?: React.ReactNode;
  pageDescription: string;
  imageFullUrl?: string;
}

export default function AuthLayout({
  title,
  children,
  pageDescription,
  imageFullUrl,
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
      <main>{children}</main>
    </>
  );
}
