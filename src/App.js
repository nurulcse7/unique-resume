import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/Routes";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfile } from "./redux/action/user";
import Loader from "./components/Loader/Loader";
import { resumeData } from "./redux/action/resumeData";

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
    dispatch(resumeData());
  }, [dispatch]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
