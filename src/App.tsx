import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import uuid from "uuid";
import dataAPI from "./data/api";
import Panel from "./components/Panel";
// import NavBar from "./components/NavBar";
// import MainContainer from "./components/MainContainer";

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            {dataAPI.map(item => {
              return (
                <li key={uuid.v4()}>
                  <Link
                    to={{
                      pathname: item.path,
                      state: {
                        from: "root"
                      }
                    }}
                  >
                    {item.linkTitle}
                  </Link>
                  {/* <Link to={item.path}>{item.linkTitle}</Link>
                  <Link to={{
                    pathname: item.path,
                    state:{
                      from: "root"
                    }
                  }}></Link> */}
                </li>
              );
            })}
          </ul>
          <Switch>
            <Route exact path="/:page" component={Panel} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}
