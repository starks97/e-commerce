import { Product } from "@prisma/client";
import { useEffect, useState } from "react";
import { CartResume } from "../../components/cart";
import { ShopLayout } from "../../components/layouts";
import { Navbar } from "../../components/navbar";

interface Props {
  product: Product;
}

export default function CartPage({ product }: Props) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
    console.log("domloaded");
  }, []);
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
