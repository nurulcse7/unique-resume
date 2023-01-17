import React from "react";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
