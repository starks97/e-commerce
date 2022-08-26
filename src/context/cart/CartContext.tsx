import React from "react";
import { createContext } from "react";
import { ICart, ISummary } from "../../interfaces";

interface ContextProps {
  cart: ICart[];
  summary: ISummary;
  addProductToCart: (product: ICart) => void;
  updateQuantityProduct: (product: ICart) => void;
  deleteProduct: (product: ICart) => void;
}

export const CartContext = createContext({} as ContextProps);
