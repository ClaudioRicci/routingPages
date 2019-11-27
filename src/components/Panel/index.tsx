import React from "react";
import "./Panel.scss";
import uuid from "uuid";
import { pure } from "recompose";
import { useLocation } from "react-router";
import Table from "../Table";

function Panel() {
  const location = useLocation();

  return (
    <main key={uuid.v4()} role="main" data-testid="Panel">
      <h1>{location.state.title}</h1>
      <p>{location.state.description}</p>
      <Table
        tableColumns={location.state.tableColumms}
        dataUrl={location.state.dataUrl}
      />
    </main>
  );
}

export default pure(Panel);
