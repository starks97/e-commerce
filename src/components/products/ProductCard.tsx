import { useState, useEffect, useMemo } from "react";

import Image from "next/image";
import Link from "next/link";

<<<<<<< HEAD
import { Text, GridItem, Box, Tag } from "@chakra-ui/react";

import { IProduct } from "../../interfaces";
=======
import { Flex, Grid, Text, Container, GridItem, Box } from "@chakra-ui/react";

import { IProduct } from "../../interfaces";
import { Navbar } from "../navbar";
import { ShopLayout } from "../layouts";
>>>>>>> 779b262 (merge)

interface Props {
  product: IProduct;
}

export default function ProductCard({ product }: Props) {
  const [isHover, setIsHover] = useState<boolean>(false);
<<<<<<< HEAD
  const [isImageLoad, setIsImageLoad] = useState<boolean>(false);
=======
>>>>>>> 779b262 (merge)

  const ImgProduct = useMemo(() => {
    return isHover
      ? `/products/${product.images[1]}`
      : `/products/${product.images[0]}`;
  }, [isHover, product.images]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
<<<<<<< HEAD
=======
    console.log("clicked");
>>>>>>> 779b262 (merge)
  };

  return (
    <GridItem
      key={product.slug}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={handleClick}
      cursor="pointer"
    >
<<<<<<< HEAD
      <Link href={`/product/${product.slug}`} passHref prefetch={false}>
=======
      <Link href='/product/slug' passHref prefetch={false}>
>>>>>>> 779b262 (merge)
        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
<<<<<<< HEAD
        >
          {product.inStock === 0 && (
            <Tag
              bg="black"
              color="white"
              sx={{ position: "absolute", zIndex: 99, marginRight: "10rem" }}
            >
              Not available
            </Tag>
          )}

=======
          maxW="fit-content"
        >
>>>>>>> 779b262 (merge)
          <Image
            src={ImgProduct}
            width="300"
            height="300"
            alt={product.title}
            objectFit="cover"
            className="fadeIn"
<<<<<<< HEAD
            onLoad={() => setIsImageLoad(true)}
=======
>>>>>>> 779b262 (merge)
          />
        </Box>
      </Link>

      <Box
<<<<<<< HEAD
        sx={{ marginTop: "2", display: isImageLoad ? "block" : "none" }}
=======
        sx={{ marginTop: "2" }}
>>>>>>> 779b262 (merge)
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
