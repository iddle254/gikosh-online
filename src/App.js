import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.pages";
import Shop from "./pages/shoppage/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        {/* <Route exact path="" component={} />
      <Route exact path="" component={} /> */}
      </Switch>
    </div>
  );
}

export default App;
