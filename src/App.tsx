import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CV from "./components/CV";
import CVComparison from "./components/CVComparison";

function App() {
  return (
    <div className="flex flex-row">
      <CV />
      <CVComparison />
    </div>
  );
}

export default App;
