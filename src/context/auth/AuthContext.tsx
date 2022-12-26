import { createContext } from "react";

export interface IUser {
  id: string;
  email: string;
  password: string;
  name: string;
  role: string;
}

type Roles = "client" | "admin";

interface IAuth {
  isLoggedIn: boolean;
  auth?: {
    user: IUser;
    token: string;
  };
  loginUser: (
    email: string,
    password: string
  ) => Promise<{ hasError: boolean; message?: string }>;
  registerUser: (
    email: string,
    password: string,
    name: string
  ) => Promise<{ hasError: boolean; message?: string }>;
  logout: () => void;
}

export const AuthContext = createContext({} as IAuth);
