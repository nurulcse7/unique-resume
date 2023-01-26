import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./reducers/dataReducer";
import { userReducer } from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    cvdata: dataReducer,
  },
});

export default store;
