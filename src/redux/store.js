import { configureStore } from "@reduxjs/toolkit";
import { loadUser } from "./reducers/loadUser";
import { userReducer } from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    userData: loadUser,
  },
});

export default store;
