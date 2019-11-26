import React from "react";
import "./Table.scss";
import uuid from "uuid";
import { pure } from "recompose";
import { TableProps } from "../../interfaces/";

const Table: React.SFC<TableProps> = props => {
  const tableColumns = props.tableColumns;

  console.table(tableColumns);
  return (
    <>
      <p>{props.dataUrl}</p>
      <table key={uuid.v4()} role="table" data-testid="Table">
        <thead>
          <tr>
            {tableColumns.map(item => {
              return <th>{item.title}</th>;
            })}
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
    </>
  );
};

export default pure(Table);
