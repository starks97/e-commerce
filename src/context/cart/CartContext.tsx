import React from "react";
import { createContext } from "react";
import { ICart } from "../../interfaces";

interface ContextProps {
  cart: ICart[];
  addProductToCart: (product: ICart) => void;
}

export const CartContext = createContext({} as ContextProps);
