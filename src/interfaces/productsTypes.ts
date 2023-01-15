export interface IProduct {
<<<<<<< HEAD
    _id?: string;
=======
    _id: string;
>>>>>>> 779b262 (merge)
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ISizes[];
    slug: string;
    tags: string[];
    title: string;
    type: ITypes;
    gender: "men" | "women" | "kid" | "unisex";
  }
  
  type ISizes = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
  type ITypes = "shirts" | "pants" | "hoodies" | "hats";