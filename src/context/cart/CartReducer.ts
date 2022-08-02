import { ICart } from "../../interfaces";
import { CartState } from "./";

type CartActionType =
  | { type: "[Cart] - LoadCart from cookies | storage" }
  | { type: "[Cart] - Add Product"; payload: ICart };

export const cartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case "[Cart] - LoadCart from cookies | storage":
      return {
        ...state,
      };
    default:
      return state;
  }
};
