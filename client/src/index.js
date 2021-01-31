import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CreatePage from "./pages/CreatePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SessionPage from "./pages/SessionPage";
import App from "./App";

const uuidRegex = /\w4/;
const sessionPath = `/:id(${uuidRegex})?`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <App>
            <CreatePage />
          </App>
        </Route>
        <Route path={sessionPath}>
          <App>
            <SessionPage />
          </App>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
