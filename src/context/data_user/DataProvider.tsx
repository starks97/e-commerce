import { UserData } from "@prisma/client";
import React, {
  Component,
  FC,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { AuthContext } from "../auth";
import { DataContext, DataProps } from "./DataContext";
import { DataReducer } from "./DataReducer";

export interface DataState {
  data?: DataProps;
  loading: boolean;
}

const DATA_INITIAL_STATE: DataState = {
  data: undefined,
  loading: true
};

export const DataProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dataState, dispatch] = useReducer(DataReducer, DATA_INITIAL_STATE);

  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn === false) return;

    const getData = async () => {
      const response = await fetch("/api/data", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        return console.log(response.statusText);
      }

      const data = await response.json();

      dispatch({ type: "[Data] - LoadData from DB", payload: data });
    };

    getData();
  }, [isLoggedIn]);

  const createData_of_user = async ({
    ...data
  }: DataProps): Promise<boolean | null> => {
    try {
      const response = await fetch("/api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data }),
      });

      if (!response.ok) {
        throw new Error("something went wrong");
      }

      const dataCreated = await response.json();

      dispatch({ type: "[Data] - Create a data_user", payload: dataCreated });
      return true;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  const updateData_of_user = async (
    data: Omit<UserData, "userId">
  ): Promise<boolean | null> => {
    try {
      const response = await fetch(`/api/data/${data.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });

      if (!response.ok) {
        throw new Error("something went wrong");
      }

      const dataUpdated = await response.json();

      dispatch({
        type: "[Data] - Update Data in DB",
        payload: dataUpdated,
      });
      return true;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  return (
    <DataContext.Provider
      value={{
        ...dataState,
        createData_of_user,
        updateData_of_user,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
