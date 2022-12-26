import React, { FC, useEffect, useReducer, useState } from "react";

import { useRouter } from "next/router";

import Cookies from "js-cookie";

import { AuthContext, IUser } from "./AuthContext";
import { authReducer } from "./authReducer";

import { useAdvancedDataFetcher } from "../../utils/handleData";

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
  const token = Cookies.get("Ecommerce_token");

  const data = useAdvancedDataFetcher<AuthState["auth"]>({
    url: "/api/auth/validate_token",
    method: "GET",
  });

  const router = useRouter();

  useEffect(() => {
    checkToken();
  });

  const checkToken = async () => {
    if (!token!) return;

    try {
      const data = await fetch("/api/auth/validate_token", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!data.ok) {
        throw new Error(data.statusText);
      }
      const { token, user } = await data.json();

      dispatch({
        type: "[Auth] - Login",
        payload: { token, user: { ...user } },
      });
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  const loginUser = async (
    email: string,
    password: string
  ): Promise<{ hasError: boolean; message?: string }> => {
    try {
      let data = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!data.ok) {
        const { message } = await data.json();
        return { hasError: true, message: message };
      }
      const { token, user } = await data.json();

      dispatch({
        type: "[Auth] - Login",
        payload: { token, user: { ...user } },
      });
      return { hasError: false };
    } catch (error) {
      console.log(`${error}`);
      return { hasError: true };
    }
  };

  const registerUser = async (
    email: string,
    password: string,
    name: string
  ): Promise<{ hasError: boolean; message?: string }> => {
    try {
      let data = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      });

      if (!data.ok) {
        const { message } = await data.json();
        return { hasError: true, message };
      }

      const { user, token } = await data.json();

      dispatch({
        type: "[Auth] - Login",
        payload: { token, user: { ...user } },
      });

      return { hasError: false };
    } catch (error) {
      console.log(`${error}`);
      return { hasError: true };
    }
  };

  const logout = () => {
    Cookies.remove("Ecommerce_token");
    Cookies.remove("cart");
    dispatch({ type: "[Auth] - Logout" });
    router.reload();
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,

        // Methods
        loginUser,
        registerUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
