export interface ICart {
  _id?: string;
  images: string;
  price: number;
  sizes: ValidSizes | null;
  slug: string;
  title: string;
  gender: "men" | "women" | "kid" | "unisex";
  quantity: number;
}

type ValidSizes = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
