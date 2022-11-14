import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import IsLoggedInReducer from "./IsLoggedInSlice";
import cellsReducer from "./cellsSlice";

export const store = configureStore({
  reducer: { isLoggedIn: IsLoggedInReducer, cells: cellsReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
