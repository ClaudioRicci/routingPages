import React from "react";
import { Switch, Route } from "react-router-dom";
import Panel from "../Panel";
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Panel} />
    </Switch>
  </main>
);

export default Main;
