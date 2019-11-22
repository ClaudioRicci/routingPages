import React from "react";
import { Switch, Route } from "react-router-dom";
import Panel from "../Panel";
const Main = (props: any) => (
  <main data-testid="MainContainer">
    <Switch>
      <Route exact path="/" component={Panel} />
      <Route key="page-1" exact path="/page1" {...props} component={Panel} />
      <Route key="page-2" exact path="/page2" {...props} component={Panel} />
    </Switch>
  </main>
);

export default Main;
