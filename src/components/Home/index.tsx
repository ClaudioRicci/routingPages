import React from "react";
import "./Home.scss";
import uuid from "uuid";
import { pure } from "recompose";

function Home() {
  return (
    <main key={uuid.v4()} role="main" data-testid="Home">
      <h1>Home Page</h1>
      <p>Please select a page from the tabs above</p>
    </main>
  );
}

export default pure(Home);
