import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { reducers, logIn } from "../Reducers/IsLoggedInReducer";

import IIsLoggedInState from "../Types/IIsLoggedInState";
import { SLICE_NAMES } from "../constants";

const initialState: IIsLoggedInState = {
  status: "idle",
  value: false,
  ownerId: null,
};

export const isLoggedInSlice = createSlice({
  name: SLICE_NAMES.IS_LOGGED_IN,
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, (state) => ({ ...state, status: "loading" }))
      .addCase(logIn.fulfilled, (_state, action) => ({
        status: "fulfilled",
        value: true,
        ownerId: action.payload,
      }))
      .addCase(logIn.rejected, () => ({
        status: "failed",
        value: false,
        ownerId: null,
      }));
  },
});

export const { logOut } = isLoggedInSlice.actions;

export const selectIsLoggedInState = (state: RootState) => state.isLoggedIn;
export const selectIsLoggedIn = (state: RootState) => state.isLoggedIn.value;

export default isLoggedInSlice.reducer;
