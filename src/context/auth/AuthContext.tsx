import { createContext } from "react";

export interface IUser {
  id: string;
  email: string;
  password: string;
  name: string;
  role: string;
}

interface IAuth {
  isLoggedIn: boolean;
  auth?: {
    user: IUser;
    token: string;
  };
  loginUser: (email: string, password: string) => Promise<boolean>;
  registerUser: (
    email: string,
    password: string,
    name: string
  ) => Promise<{ hasError: boolean }>;
}

export const AuthContext = createContext({} as IAuth);
