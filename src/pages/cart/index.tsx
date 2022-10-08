import { useContext, useEffect, useState } from "react";

import { Product } from "@prisma/client";

import { useRouter } from "next/router";

import { CartResume } from "../../components/cart";
import { ShopLayout } from "../../components/layouts";
import { Navbar } from "../../components/navbar";
import { CartContext } from "../../context";

interface Props {
  product: Product;
}

export default function CartPage({ product }: Props) {
  const [domLoaded, setDomLoaded] = useState(false);

  const {isLoaded, cart} = useContext(CartContext);

  const router = useRouter()

  useEffect(() => {
    if(isLoaded  && cart.length === 0){
      router.replace("/cart/empty");
    }

  }, [isLoaded, cart, router]);

  useEffect(() => {
    setDomLoaded(true);
    console.log("domloaded");
  }, []);

  if (!isLoaded || cart.length === 0) {
    return <></>;
  }
  return (
    <>
      {domLoaded && (
        <ShopLayout title="cart" pageDescription="your items">
          <Navbar />
          <CartResume product={product} />
        </ShopLayout>
      )}
    </>
  );
}
