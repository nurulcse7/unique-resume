import React, { useEffect } from "react";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfile } from "./redux/action/user";

function App() {
  const { error, message } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);

      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  // useEffect(() => {
  //   dispatch(getMyProfile());
  // }, [dispatch]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
