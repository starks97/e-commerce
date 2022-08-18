import { Product } from "@prisma/client";
import { CartResume } from "../../components/cart";
import { ShopLayout } from "../../components/layouts";
import { Navbar } from "../../components/navbar";

interface Props {
  product: Product;
}

export default function CartPage({ product }: Props) {
  return (
    <>
      <ShopLayout title="cart" pageDescription="your items">
        <Navbar />
        <CartResume product={product} />
      </ShopLayout>
    </>
  );
}
