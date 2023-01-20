import { configureStore } from "@reduxjs/toolkit";
import { loadUser } from "./reducers/loadUser";
import { userReducer } from "./reducers/userReducer";

export const server = "https://unique-resume.onrender.com";

const store = configureStore({
  reducer: {
    user: userReducer,
    userData: loadUser,
  },
});

export default store;
