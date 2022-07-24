import { useState, useEffect, useMemo } from "react";

import Image from "next/image";
import Link from "next/link";

import { Text, GridItem, Box } from "@chakra-ui/react";

import { IProduct } from "../../interfaces";
import { Navbar } from "../navbar";
import { ShopLayout } from "../layouts";

interface Props {
  product: IProduct;
}

export default function ProductCard({ product }: Props) {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isImageLoad, setIsImageLoad] = useState<boolean>(false);

  const ImgProduct = useMemo(() => {
    return isHover
      ? `/products/${product.images[1]}`
      : `/products/${product.images[0]}`;
  }, [isHover, product.images]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <GridItem
      key={product.slug}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={handleClick}
      cursor="pointer"
    >
      <Link href={`/product/${product.slug}`} passHref prefetch={false}>
        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          maxW="fit-content"
        >
          <Image
            src={ImgProduct}
            width="300"
            height="300"
            alt={product.title}
            objectFit="cover"
            className="fadeIn"
            onLoad={() => setIsImageLoad(true)}
          />
        </Box>
      </Link>

      <Box
        sx={{ marginTop: "2", display: isImageLoad ? "block" : "none" }}
        className="fadeIn"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontFamily="Less">{product.title}</Text>
        <Text fontFamily="Raleway" marginTop="2">{`$${product.price}`}</Text>
      </Box>
    </GridItem>
  );
}
