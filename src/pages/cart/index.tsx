
import { CartResume } from "../../components/cart";
import { ShopLayout } from "../../components/layouts";
import { Navbar } from "../../components/navbar";

type Props = {};

export default function CartPage({}: Props) {
  return (
    <ShopLayout title="cart" pageDescription="your items">
      <Navbar />
      <CartResume />
    </ShopLayout>
  );
}
