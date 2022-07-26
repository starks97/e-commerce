import { useProducts } from "../../hooks";
import { ShopLayout } from "../layouts";
import { Navbar } from "../navbar";
import FullScreenLoading from "./FullScreenLoading";
import { ProductList } from "../products";

interface Props<L extends CategoryLinks> {
  url: L;
  Tpages: TitlePages;
}

export type TitlePages =
  | "All Products"
  | "Kids Products"
  | "Men Products"
  | "Women Products"
  | "Unisex Products";

export enum CategoryLinks {
  WOMEN = "/products?gender=women",
  MEN = "/products?gender=men",
  UNISEX = "/products?gender=unisex",
  KID = "/products?gender=kid",
  ALL = "/",
}
export default function TrackerTitle<L extends CategoryLinks>({
  url,
  Tpages,
}: Props<L>) {
  const { products, isLoading } = useProducts(url);
  return (
    <ShopLayout
      title={`Teslo | Shop - ${Tpages}`}
      pageDescription="Welcome our shop"
    >
      <Navbar />

      {isLoading ? (
        <FullScreenLoading />
      ) : (
        <ProductList title={Tpages} products={products} />
      )}
    </ShopLayout>
  );
}
