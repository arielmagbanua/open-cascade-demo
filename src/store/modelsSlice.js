import { createSlice } from "@reduxjs/toolkit";

const modelsSlice = createSlice({
  name: 'models',
  initialState: {
    flaskBottle: {
      width: 40,
      height: 60,
      thickness: 20
    },
    boxSphere: {
      size: 0.55
    },
    logoSphere: {}
  },
  reducers: {
    updateFlaskBottle(state, action) {
      state.flaskBottle = action.payload;
    },
    updateBoxSphere(state, action) {
      state.boxSphere = action.payload;
    },
    updateLogoSphere(state, action) {
      state.logoSphere = action.payload;
    }
  }
});

export const { updateFlaskBottle, updateBoxSphere, updateLogoSphere } = modelsSlice.actions;
export const modelsReducer = modelsSlice.reducer;