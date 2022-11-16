import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../constants";
import ICell from "../Types/ICell";

export const fetchAllCells = createAsyncThunk(
  "fetchAllCells",
  async (): Promise<ICell[]> => {
    try {
      const response = await fetch(BASE_URL + "cells");

      if (!response.ok) {
        return Promise.reject("error");
      }

      const responseJSON = await response.json();

      let allCells: ICell[] = responseJSON.payload.queryResult;

      return allCells;
    } catch (error) {
      console.log("failed to fetch all cells", error);
      return Promise.reject("error");
    }
  },
);
