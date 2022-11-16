import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import isLoggedInReducer from "./isLoggedInSlice";
import rentedCellsReducer from "./rentedCellsSlice";
import allCellsReducer from "./allCellsSlice";

export const store = configureStore({
  reducer: {
    isLoggedIn: isLoggedInReducer,
    rentedCells: rentedCellsReducer,
    allCells: allCellsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
