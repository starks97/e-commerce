import React, { Component, FC, useEffect, useReducer } from "react";

import Cookie from "js-cookie";

import { ICart, ISummary } from "../../interfaces";
import { CartContext, cartReducer } from "./";

export interface CartState {
  cart: ICart[];
  summary: ISummary;
  isLoaded: boolean
}

const CART_INITIAL_STATE: CartState = {
  cart: Cookie.get("cart") ? JSON.parse(Cookie.get("cart") || "") : [],
  summary: {
    total_of_items: 0,
    total_of_price: 0,
    taxes: 0,
    total_of_price_with_taxes: 0,
  },
  isLoaded: false
};

export const CartProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartState, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  useEffect(() => {
    Cookie.set("cart", JSON.stringify(cartState.cart));
  }, [cartState.cart]);

  useEffect(() => {
    const total_of_items = cartState.cart.reduce(
      (acc, curr) => acc + curr.quantity,
      0
    );

    const total_of_price = cartState.cart.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );

    const taxes = (total_of_price * 8.467) / 100;

    const orderSummary = {
      total_of_items,
      total_of_price,
      taxes,
      total_of_price_with_taxes: total_of_price + taxes,
    };

    dispatch({
      type: "[Cart] - Update Product Summary",
      payload: orderSummary,
    });
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

  const updateQuantityProduct = (product: ICart) => {
    dispatch({ type: "[Cart] - Update Product Quantity", payload: product });
  };

  const deleteProduct = (product: ICart) => {
    dispatch({
      type: "[Cart] - Delete Product from Cart",
      payload: product,
    });
  };

  return (
    <CartContext.Provider
      value={{
        ...cartState,
        addProductToCart,
        updateQuantityProduct,
        deleteProduct,
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
