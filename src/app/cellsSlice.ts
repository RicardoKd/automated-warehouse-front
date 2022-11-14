import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { fetchCustomerCells } from "../Reducers/CellsReducer";

import ICellsState from "../Types/ICellsState";
import { SLICE_NAMES } from "../constants";

const initialState: ICellsState = {
  status: "idle",
  value: [],
};

export const cellsReducer = createSlice({
  name: SLICE_NAMES.CELLS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomerCells.pending, (state) => ({
        ...state,
        status: "loading",
      }))
      .addCase(fetchCustomerCells.fulfilled, (_state, action) => {
        return { status: "fulfilled", value: action.payload };
      })
      .addCase(fetchCustomerCells.rejected, () => ({
        status: "failed",
        value: [],
      }));
  },
});

export const selectCellsState = (state: RootState) => state.cells;
export const selectCells = (state: RootState) => state.cells.value;

export default cellsReducer.reducer;
