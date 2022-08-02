import React, { Component, useReducer, FC, ReactNode } from "react";

import { ICart } from "../../interfaces";
import { CartContext, cartReducer } from "./";

export interface CartState {
  cart: ICart[];
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
};

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
