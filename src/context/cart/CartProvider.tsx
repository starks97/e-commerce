import { Product } from "@prisma/client";
import React, { Component, useReducer, FC, ReactNode } from "react";

import { ICart } from "../../interfaces";
import { CartContext, cartReducer } from "./";

export interface CartState {
  cart: ICart[];
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
};

export const CartProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartState, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  const addProductToCart = (product: ICart) => {
    //dispatch({ type: "[Cart] - Add Product", payload: product });
    /*const productsInCart = cartState.cart.filter(
      (p) => p._id !== product._id && p.sizes !== product.sizes
    );
    dispatch({
      type: "[Cart] - Add Product",
      payload: [...productsInCart, product],
    });*/

    const productInCart = cartState.cart.some(
      (item) => item._id === product._id
    );
    if (!productInCart)
      return dispatch({
        type: "[Cart] - Update Products in Cart",
        payload: [...cartState.cart, product],
      });

    const PIC_differentSize = cartState.cart.some(
      (item) => item._id === product._id && item.sizes === product.sizes
    );

    if (!PIC_differentSize)
      return dispatch({
        type: "[Cart] - Update Products in Cart",
        payload: [...cartState.cart, product],
      });

    const updateProducts = cartState.cart.map((element) => {
      if (element._id !== product._id) return element;
      if (element.sizes !== product.sizes) return element;
      element.quantity += product.quantity;

      return element;
    });

    dispatch({
      type: "[Cart] - Update Products in Cart",
      payload: [...updateProducts],
    });
  };

  return (
    <CartContext.Provider value={{ ...cartState, addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
};
