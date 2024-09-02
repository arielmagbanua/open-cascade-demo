import { createSlice } from "@reduxjs/toolkit";

const pagesSlice = createSlice({
  name: 'pages',
  initialState: {
    flaskBottleSelected: true,
    boxSphereSelected: false,
    logoSphereSelected: false
  },
  reducers: {
    selectFlaskBottle(state) {
      state.flaskBottleSelected = true;
      state.boxSphereSelected = false;
      state.logoSphereSelected = false;
    },
    selectBoxSphere(state) {
      state.flaskBottleSelected = false;
      state.boxSphereSelected = true;
      state.logoSphereSelected = false;
    },
    selectLogoSphere(state) {
      state.flaskBottleSelected = false;
      state.boxSphereSelected = false;
      state.logoSphereSelected = true;
    }
  }
});

export const { selectFlaskBottle, selectBoxSphere, selectLogoSphere } = pagesSlice.actions;
export const pagesReducer = pagesSlice.reducer;
