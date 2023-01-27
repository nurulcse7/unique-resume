import { createReducer } from "@reduxjs/toolkit";

export const dataReducer = createReducer(
  {},
  {
    cvDataRequest: (state, action) => {
      state.loading = true;
    },

    cvDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    cvDataFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    cvTemplateReq: (state, action) => {
      state.loading = true;
    },

    cvTemplateSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    cvTemplateFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);
