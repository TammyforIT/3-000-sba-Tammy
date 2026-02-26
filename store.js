import { configureStore } from "@reduxjs/toolkit";
import birdsReducer from "./birdsslice";

export const store = configureStore({
  reducer: {
    birds: birdsReducer,
  },
});
