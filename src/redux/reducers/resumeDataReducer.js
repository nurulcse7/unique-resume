import { createReducer } from "@reduxjs/toolkit";

export const resumeDataReducer = createReducer(
  {},
  {
    resumeDataRequest: (state, action) => {
      state.loading = true;
    },

    resumeDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload.template;
    },
    resumeDataFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);
