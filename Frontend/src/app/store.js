import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./slices/counterSlice";
export const store = configureStore({
  reducer: alertReducer,
});
