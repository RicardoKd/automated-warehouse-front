import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import IsLoggedInReducer from "./IsLoggedInSlice";

export const store = configureStore({
  reducer: { isLoggedIn: IsLoggedInReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
