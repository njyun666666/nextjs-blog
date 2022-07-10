import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "../components/layoutSlice";

export const store = configureStore({
  reducer: { layout: layoutReducer },
});
