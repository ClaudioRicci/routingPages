import React from "react";
import "./Panel.scss";
import uuid from "uuid";
import { pure } from "recompose";
import { PanelProps } from "../../interfaces/";

const Panel: React.SFC<PanelProps> = props => {
  return (
    <main key={uuid.v4()} role="main" data-testid="Panel">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </main>
  );
};

Panel.defaultProps = {
  title: "My Page",
  description: "Page description here"
};

export default pure(Panel);
