import React from "react";
import "./App.css";
import Navbar from "./common/Navbar/Navbar";
import Features from "./components/Features/Features";
import HowToWork from "./components/HowToWork/HowToWork";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HowToWork />
      <Features />
    </div>
  );
}

export default App;
