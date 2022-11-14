import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../constants";
import ICell from "../Types/ICell";

export const fetchCustomerCells = createAsyncThunk(
  "fetchCustomerCells",
  async (customerId: string): Promise<ICell[]> => {
    try {
      console.log("fetching");
      const response = await fetch(BASE_URL + `cells?ownerId=${customerId}`);

      if (!response.ok) {
        return Promise.reject("error");
      }

      const responseJSON = await response.json();

      let customerCells: ICell[] = responseJSON.payload.queryResult;

      return customerCells;
    } catch (error) {
      console.log("failed to fetch cells", error);
      return Promise.reject("error");
    }
  },
);
