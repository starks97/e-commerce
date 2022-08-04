import { ICart } from "../../interfaces";
import { CartState } from "./";

type CartActionType =
  | { type: "[Cart] - LoadCart from cookies | storage"; payload: ICart[] }
  | { type: "[Cart] - Update Products in Cart"; payload: ICart[] };

export const cartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case "[Cart] - LoadCart from cookies | storage":
      return {
        ...state,
      };
    case "[Cart] - Update Products in Cart":
      return {
        ...state,
        cart: [...action.payload],
      };
    default:
      return state;
  }
};
