import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { reducers, logIn } from "../Reducers/IsLoggedInReducer";

import IIsLoggedInState from "../Types/IIsLoggedInState";
import { SLICE_NAMES } from "../constants";

const initialState: IIsLoggedInState = {
  status: "idle",
  value: false,
};

export const IsLoggedInSlice = createSlice({
  name: SLICE_NAMES.IS_LOGGED_IN,
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logIn.fulfilled, (state) => {
        state.status = "succeeded";
        state.value = true;
      })
      .addCase(logIn.rejected, (state) => {
        state.status = "failed";
        state.value = false;
      });
  },
});

export const { logOut } = IsLoggedInSlice.actions;

export const selectIsLoggedInState = (state: RootState) => state.isLoggedIn;
export const selectRenderedCoins = (state: RootState) => state.isLoggedIn.value;

export default IsLoggedInSlice.reducer;
