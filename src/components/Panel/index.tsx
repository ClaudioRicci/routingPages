import React from "react";
import "./Panel.scss";
import uuid from "uuid";
import { pure } from "recompose";
import { useParams, useLocation, useHistory } from "react-router";
import Table from "../Table";

// import { PanelProps } from "../../interfaces/";

function Panel() {
  const { page } = useParams();
  const location = useLocation();
  const history = useHistory();

  function goBackHandle() {
    history.goBack();
  }

  console.log(location);
  return (
    <main key={uuid.v4()} role="main" data-testid="Panel">
      <h1>{location.state.title}</h1>
      <p>{location.state.description}</p>
      <Table />
      {/* <p>Page: {page}</p>
      <p>Location: {location.pathname}</p>
      <p>State: {location.state.from}</p> */}
      <button onClick={goBackHandle}>Go Back</button>
    </main>
  );
}

export default pure(Panel);
