export interface ICart {
  _id?: string;
  images: string;
  price: number;
  sizes: ValidSizes | null;
  slug: string;
  title: string;
  gender: Genders | null;
  quantity: number;
}

type ValidSizes = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
type Genders = "men" | "women" | "kid" | "unisex";
