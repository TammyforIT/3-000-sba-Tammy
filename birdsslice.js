import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBirds } from "./api";

export const fetchBirds = createAsyncThunk("birds/fetchBirds", async () => {
  return await getBirds();
});

const birdsSlice = createSlice({
  name: "birds",
  initialState: {
    list: [],
    status: "idle",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBirds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBirds.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchBirds.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default birdsSlice.reducer;
