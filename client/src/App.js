import React from "react";
import "./App.css";

const App = ({ children }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>/ Planning Poker /</h1>
      </header>
      <div className={"App-wrapper"}>
        <div className={"App-content"}>{children}</div>
      </div>
    </div>
  );
};

export default App;
