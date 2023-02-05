import { configureStore } from "@reduxjs/toolkit";
import { allUserReducer } from "./reducers/alluserReducer";
import { dataReducer } from "./reducers/dataReducer";
import { resumeDataReducer } from "./reducers/resumeDataReducer";
import { userReducer } from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    cvdata: dataReducer,
    coverletter: dataReducer,
    resumeData: resumeDataReducer,
    allUserData: allUserReducer,
  },
});

export default store;
