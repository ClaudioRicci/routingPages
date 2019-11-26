import React from "react";
import "./Table.scss";
import uuid from "uuid";
import { pure } from "recompose";

// import { TableProps } from "../../interfaces/";

function Table() {
  return (
    <table key={uuid.v4()} role="table" data-testid="Table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Location</th>
          <th>Is Online</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
      </tbody>
    </table>
  );
}

export default pure(Table);
