import { configureStore } from "@reduxjs/toolkit";
import { pagesReducer, selectFlaskBottle, selectBoxSphere, selectLogoSphere } from "./pagesSlice";

export const store = configureStore({
  reducer: {
    pages: pagesReducer
  }
})

export { selectFlaskBottle, selectBoxSphere, selectLogoSphere };
