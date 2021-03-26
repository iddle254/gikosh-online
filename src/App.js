import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.pages";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="" component={} />
      <Route exact path="" component={} /> */}
      </Switch>
    </div>
  );
}

export default App;
