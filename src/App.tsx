import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Panel from "./components/Panel";
// import NavBar from "./components/NavBar";
// import MainContainer from "./components/MainContainer";

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link to="/page/page1">Page 1</Link>
            </li>
            <li>
              <Link to="/page/page2">Page 2</Link>
            </li>
            <li>
              <Link to="/page/page3">Page 3</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/page/:page" component={Panel} />
            {/* <Route exact path="/page2" component={Panel} />
            <Route exact path="/page3" component={Panel} /> */}
          </Switch>
        </header>
      </div>
    </Router>
  );
}
