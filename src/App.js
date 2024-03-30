import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Dictionary defaultKeyword="word" />
      </div>
    </div>
  );
}
