import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./reducers/dataReducer";
import { resumeDataReducer } from "./reducers/resumeDataReducer";
import { userReducer } from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    cvdata: dataReducer,
    resumeData: resumeDataReducer,
  },
});

export default store;
