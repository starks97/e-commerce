import React, { Component, FC, useEffect, useReducer } from "react";

import Cookie from "js-cookie";

import { Product } from "@prisma/client";

import { ICart } from "../../interfaces";
import { CartContext, cartReducer } from "./";

type R = string | null | undefined;

export interface CartState {
  cart: ICart[];
}

const CART_INITIAL_STATE: CartState = {
  cart: Cookie.get("cart") ? JSON.parse(Cookie.get("cart") || "") : [],
};

export const CartProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartState, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  useEffect(() => {
    Cookie.set("cart", JSON.stringify(cartState.cart));
  }, [cartState.cart]);

  useEffect(() => {
    try {
      dispatch({
        type: "[Cart] - LoadCart from cookies | storage",
        payload: cartState.cart,
      });
    } catch (error) {
      dispatch({
        type: "[Cart] - LoadCart from cookies | storage",
        payload: [],
      });
    }
  }, []);

  const addProductToCart = (product: ICart) => {
    const productInCart = cartState.cart.some(
      (item) => item._id === product._id
    );
    if (!productInCart)
      return dispatch({
        type: "[Cart] - Update Products in Cart",
        payload: [...cartState.cart, product],
      });

    const cartItem_differentSize = cartState.cart.some(
      (item) => item._id === product._id && item.sizes === product.sizes
    );

    if (!cartItem_differentSize)
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
