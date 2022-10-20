import IIsLoggedInState from "../Types/IIsLoggedInState";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../constants";

export const logIn = createAsyncThunk(
  "logIn",
  async (payload: { email: string; password: string }) => {
    const { email, password } = payload;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };

    try {
      const response = await fetch(BASE_URL + "logIn", requestOptions);
      const isJson = response.headers
        .get("content-type")
        ?.includes("application/json");
      const data = isJson && (await response.json());

      if (!response.ok) {
        // get error message from body or default to response status
        const error = (data && data.message) || response.status;

        return Promise.reject(error);
      }
    } catch (error) {
      console.log(error);
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
