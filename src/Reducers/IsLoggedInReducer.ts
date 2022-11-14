import IIsLoggedInState from "../Types/IIsLoggedInState";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../constants";

export const logIn = createAsyncThunk(
  "logIn",
  async (payload: { email: string; password: string }) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };

    try {
      const response = await fetch(BASE_URL + "customer/logIn", requestOptions);

      if (!response.ok) {
        console.log("not ok");
        return Promise.reject("error");
      }

      const responseJSON = await response.json();

      return responseJSON.payload.customerId;
    } catch (error) {
      console.log("failled to login", error);
      return Promise.reject("failled to login");
    }
  },
);

export const reducers = {
  logOut(state: IIsLoggedInState) {
    const newState = {
      ...state,
      value: false,
    };

    return newState;
  },
};
