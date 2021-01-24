import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CreatePage from "./pages/CreatePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <CreatePage />
        </Route >
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
