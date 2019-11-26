import React from "react";
import { Switch, Route } from "react-router-dom";
import Panel from "../Panel";
import dataAPI from "../../data/api";

const Main = (props: any) => (
  <main data-testid="MainContainer">
    <Switch>
      {dataAPI.map(item => (
        <Route key={item.path} exact path={item.path} component={Panel} />
      ))}
    </Switch>
  </main>
);

export default Main;
