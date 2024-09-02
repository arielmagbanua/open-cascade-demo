import { configureStore } from "@reduxjs/toolkit";
import { pagesReducer, selectFlaskBottle, selectBoxSphere, selectLogoSphere } from "./pagesSlice";
import { modelsReducer, updateFlaskBottle, updateBoxSphere, updateLogoSphere } from "./modelsSlice";

export const store = configureStore({
  reducer: {
    pages: pagesReducer,
    models: modelsReducer
  }
})

export {
  selectFlaskBottle,
  selectBoxSphere,
  selectLogoSphere,
  updateFlaskBottle,
  updateBoxSphere,
  updateLogoSphere
};
