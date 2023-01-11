import React from "react";
import "./App.css";
import Navbar from "./common/Navbar/Navbar";
import CallToAction from "./components/CallToAction/CallToAction";
import Features from "./components/Features/Features";
import HowToWork from "./components/HowToWork/HowToWork";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HowToWork />
      <CallToAction />
      <Features />
    </div>
  );
}

export default App;
