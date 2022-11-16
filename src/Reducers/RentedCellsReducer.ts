import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../constants";
import ICell from "../Types/ICell";

export const fetchCustomerRentedCells = createAsyncThunk(
  "fetchCustomerRentedCells",
  async (customerId: string): Promise<ICell[]> => {
    try {
      const response = await fetch(BASE_URL + `cells?ownerId=${customerId}`);

      if (!response.ok) {
        return Promise.reject("error");
      }

      const responseJSON = await response.json();

      let rentedCells: ICell[] = responseJSON.payload.queryResult;

      return rentedCells;
    } catch (error) {
      console.log("failed to fetch cells", error);
      return Promise.reject("error");
    }
  },
);
