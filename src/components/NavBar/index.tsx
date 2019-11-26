import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import uuid from "uuid";
import dataAPI from "../../data/api";
import Panel from "../../components/Panel";
import "./NavBar.scss";

const NavBar = () => (
  <Router>
    <div className="App">
      <ul>
        {dataAPI.map(item => {
          return (
            <li key={uuid.v4()}>
              <Link
                to={{
                  pathname: item.path,
                  state: {
                    title: item.pageTitle,
                    description: item.pageDescription,
                    tableColumms: item.table.columns,
                    dataUrl: item.table.apiEndpoint
                  }
                }}
              >
                {item.linkTitle}
              </Link>
            </li>
          );
        })}
      </ul>
      <Switch>
        <Route exact path="/:page" component={Panel} />
      </Switch>
    </div>
  </Router>
);

export default NavBar;
