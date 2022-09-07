import React, { FC, useEffect, useReducer } from "react";

import { AuthContext, IUser } from "./AuthContext";
import { authReducer } from "./authReducer";

export interface AuthState {
  isLoggedIn: boolean;
  auth?: {
    user: IUser;
    token: string;
  };
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  auth: undefined,
};

export const AuthProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const response = await fetch("/api/auth/validate_token", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        const tokenChecked = await response.json();

        const { user, token } = tokenChecked;
        const { role, ...parsedUser } = user;

        dispatch({
          type: "[Auth] - Login",
          payload: { token, user: parsedUser },
        });
      }
      return response;
    } catch (err) {
      console.log(err, "user not authenticated");
      return false;
    }
  };

  const loginUser = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      let data = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!data.ok) {
        return false;
      }
      const userLogged = await data.json();

      const { user, token } = userLogged;

      const { role, ...parsedUser } = user;

      dispatch({
        type: "[Auth] - Login",
        payload: { token, user: parsedUser },
      });
      return true;
    } catch (err) {
      console.log(err, "login not authenticated");
      return false;
    }
  };

  const registerUser = async (
    email: string,
    password: string,
    name: string
  ): Promise<{ hasError: boolean }> => {
    try {
      let data = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      });
      if (data.ok) {
        const userRegistered = await data.json();

        const { user, token } = userRegistered;

        const { role, ...parsedUser } = user;

        console.log(parsedUser);
        dispatch({
          type: "[Auth] - Login",
          payload: { token, user: parsedUser },
        });
        return { hasError: false };
      }
      console.log(data);

      return { hasError: true };
    } catch (err) {
      console.log(err, "register not authenticated");
      return { hasError: true };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,

        // Methods
        loginUser,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
