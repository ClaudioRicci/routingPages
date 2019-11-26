import React from "react";
import "./Panel.scss";
import uuid from "uuid";
import { pure } from "recompose";
import { useParams } from "react-router";
// import { PanelProps } from "../../interfaces/";

function Panel() {
  const { page } = useParams();
  return (
    <main key={uuid.v4()} role="main" data-testid="Panel">
      <p>Page: {page}</p>
    </main>
  );
}

export default pure(Panel);
