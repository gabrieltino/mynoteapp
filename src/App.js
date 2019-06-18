import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/NavBar";
import Listnotes from "./components/Listnotes";

const App = () => {
  return (
    <Switch>
      <Navbar />
      <Listnotes />
    </Switch>
  );
};

export default App;
