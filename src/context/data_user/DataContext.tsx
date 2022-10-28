import { UserData } from "@prisma/client";

import { createContext } from "react";

export interface DataProps {
  name: string;
  address: string;
  zipCode: string;
  country: string;
  telephone: string;
  lastname: string;
  address2: string;
  city: string;
}

export interface DataContext {
  data?: DataProps;
  createData_of_user: ({ ...data }: DataProps) => Promise<boolean | null>;
  updateData_of_user: (
    data: Omit<UserData, "userId">
  ) => Promise<boolean | null>;
}

export const DataContext = createContext<DataContext>({} as DataContext);
