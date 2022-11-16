import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { fetchCustomerRentedCells } from "../Reducers/RentedCellsReducer";

import ICellsState from "../Types/ICellsState";
import { SLICE_NAMES } from "../constants";

const initialState: ICellsState = {
  status: "idle",
  value: [],
};

export const rentedCellsReducer = createSlice({
  name: SLICE_NAMES.RENTED_CELLS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomerRentedCells.pending, (state) => ({
        ...state,
        status: "loading",
      }))
      .addCase(fetchCustomerRentedCells.fulfilled, (_state, action) => {
        return { status: "fulfilled", value: action.payload };
      })
      .addCase(fetchCustomerRentedCells.rejected, () => ({
        status: "failed",
        value: [],
      }));
  },
});

export const selectRentedCellsState = (state: RootState) => state.rentedCells;
export const selectRentedCells = (state: RootState) => state.rentedCells.value;

export default rentedCellsReducer.reducer;
