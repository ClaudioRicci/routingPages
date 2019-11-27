import React from "react";
import uuid from "uuid";
import { pure } from "recompose";
import { TableProps } from "../../interfaces/";
import "./Table.scss";
import pageAData from "./../../data/page-a-data.json";
import pageBData from "./../../data/page-b-data.json";
import pageCData from "./../../data/page-c-data.json";
import tick from "../../icons/tick.svg";

const Table: React.SFC<TableProps> = props => {
  const tableColumns = props.tableColumns;
  return (
    <table key={uuid.v4()} role="table" data-testid="Table">
      <thead>
        <tr>
          {tableColumns.map(column => (
            <th key={uuid.v4()}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {pageAData.map(person => {
          return (
            <tr key={uuid.v4()}>
              <td>{person.name}</td>
              <td>
                <a href={"mailto:" + person.email}>{person.email}</a>
              </td>
              <td>{person.location}</td>
              <td className="isOnlineCell">
                {person.isOnline ? (
                  <img src={tick} alt={person.name + " is online"}></img>
                ) : (
                  ""
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default pure(Table);
