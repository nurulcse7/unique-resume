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
      state.user = action.payload;
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
      state.message = action.payload.message;
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
    forgotPassRequest: (state, action) => {
      state.loading = true;
    },
    forgotPassSuccess: (state, action) => {
      state.loading = false;
      // state.message = action.payload.data.message;
      state.iaAuthenticated = null;
      state.success = true;
    },
    forgotPassFail: (state, action) => {
      state.loading = false;
      state.iaAuthenticated = false;
      state.error = action.payload.data.message;
      state.success = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
