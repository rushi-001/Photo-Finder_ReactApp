import React from "react";
import "./App.css";
import SeachPhoto from "./components/SeachPhoto";

function App() {
  return (
    <>
      <div className="app">
        <div className="transparent">
          <h1 className="title">Best photo's for you 📸</h1>
          <SeachPhoto />
        </div>
      </div>
    </>
  );
}

export default App;
