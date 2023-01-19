import { createReducer } from "@reduxjs/toolkit";

export const loadUser = createReducer(
  {},
  {
    userDataRequest: (state, action) => {
      state.loading = true;
    },
    userDataSuccess: (state, action) => {
      state.loading = false;
      state.iaAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    userDataFail: (state, action) => {
      state.loading = false;
      state.iaAuthenticated = false;
      state.error = action.payload;
    },
  }
);
