import { createReducer } from "@reduxjs/toolkit";

export const allUserReducer = createReducer(
  {},
  {
    getAllUsersReq: (state, action) => {
      state.loading = true;
    },

    getAllUsersSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },

    getAllUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);
