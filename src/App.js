<<<<<<< HEAD
import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
=======
import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/Routes";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfile } from "./redux/action/user";
import Loader from "./components/Loader/Loader";
>>>>>>> bed1e5d71a3687c46b18b4254a5cabc38e8d141e

function App() {
  const { error, message, loading } = useSelector((state) => state.user);
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
    if (loading) {
      <Loader />;
    }
  }, [dispatch, error, message, loading]);

  useEffect(() => {
    dispatch(getMyProfile());
  }, [dispatch]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
<<<<<<< HEAD
=======
      <Toaster />
>>>>>>> bed1e5d71a3687c46b18b4254a5cabc38e8d141e
    </div>
  );
}

export default App;
