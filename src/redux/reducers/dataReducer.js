import { createReducer } from "@reduxjs/toolkit";

export const dataReducer = createReducer(
  {},
  {
    cvDataRequest: (state, action) => {
      state.loading = true;
    },

    cvDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload.template;
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
      state.data = action.payload.template;
    },
    cvTemplateFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    cvInfoReq: (state, action) => {
      state.loading = true;
    },

    cvInfoSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    cvInfoFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    coverTemplateReq: (state, action) => {
      state.loading = true;
    },

    coverTemplateSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload.template;
    },
    coverTemplateFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Abdur Rahman
  }
);
