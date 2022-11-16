import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { fetchAllCells } from "../Reducers/AllCellsReducer";

import ICellsState from "../Types/ICellsState";
import { SLICE_NAMES } from "../constants";

const initialState: ICellsState = {
  status: "idle",
  value: [],
};

export const allCellsReducer = createSlice({
  name: SLICE_NAMES.ALL_CELLS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCells.pending, (state) => ({
        ...state,
        status: "loading",
      }))
      .addCase(fetchAllCells.fulfilled, (_state, action) => {
        return { status: "fulfilled", value: action.payload };
      })
      .addCase(fetchAllCells.rejected, () => ({
        status: "failed",
        value: [],
      }));
  },
});

export const selectAllCellsState = (state: RootState) => state.allCells;
export const selectAllCells = (state: RootState) => state.allCells.value;

export default allCellsReducer.reducer;
