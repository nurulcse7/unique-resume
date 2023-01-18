import { createReducer } from "@reduxjs/toolkit";
export const userReducer = createReducer(
  {},
  {
    loginRequest: (state, action) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.iaAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.iaAuthenticated = false;
      state.error = action.payload;
    },
    loadUserRequest: (state, action) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.iaAuthenticated = true;
      state.user = action.payload.user;
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.iaAuthenticated = false;
      state.error = action.payload;
    },
    registerRequest: (state, action) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.iaAuthenticated = true;
      state.user = action.payload.user;
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.iaAuthenticated = false;
      state.error = action.payload;
    },
    logoutRequest: (state, action) => {
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.user = null;
      state.iaAuthenticated = false;
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.iaAuthenticated = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
