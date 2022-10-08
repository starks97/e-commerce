import { ICart, ISummary } from "../../interfaces";
import { CartState } from "./";

type CartActionType =
  | { type: "[Cart] - LoadCart from cookies | storage"; payload: ICart[] }
  | { type: "[Cart] - Update Products in Cart"; payload: ICart[] }
  | { type: "[Cart] - Update Product Quantity"; payload: ICart }
  | { type: "[Cart] - Delete Product from Cart"; payload: ICart }
  | { type: "[Cart] - Update Product Summary"; payload: ISummary };

export const cartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case "[Cart] - LoadCart from cookies | storage":
      return {
        ...state,
        isLoaded: true,
        cart: action.payload,
      };
    case "[Cart] - Update Products in Cart":
      console.log(action.payload);
      return {
        ...state,
        cart: [...action.payload],
        
      };

    case "[Cart] - Update Product Quantity":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item._id !== action.payload._id) return item;
          if (item.sizes !== action.payload.sizes) return item;
          return action.payload;
        }),
      };

    case "[Cart] - Delete Product from Cart":
      return {
        ...state,
        cart: state.cart.filter(
          (item) =>
            !(
              item._id === action.payload._id &&
              item.sizes == action.payload.sizes
            )
        ),
      };

    case "[Cart] - Update Product Summary":
      return {
        ...state,
        summary: action.payload,
      };
    default:
      return state;
  }
};
