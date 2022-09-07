import { IUser } from "./AuthContext";
import { AuthState } from "./AuthProvider";

type AuthActionType =
  | {
      type: "[Auth] - Login";
      payload: {
        user: IUser;
        token: string;
      };
    }
  | { type: "[Auth] - Logout" };

export const authReducer = (
  state: AuthState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case "[Auth] - Login":
      return {
        ...state,
        isLoggedIn: true,
        auth: action.payload,
      };

    case "[Auth] - Logout":
      return {
        ...state,
        isLoggedIn: false,
        auth: undefined,
      };

    default:
      return state;
  }
};
