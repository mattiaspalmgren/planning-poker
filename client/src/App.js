import React from "react";
import "./App.css";

const App = ({ children }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Planning Poker</h4>
      </header>
      <div className={"App-wrapper"}>
        {children}
      </div>
    </div>
  );
}

export default App;
