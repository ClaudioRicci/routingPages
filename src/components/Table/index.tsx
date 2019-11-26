import React, { useEffect, useState } from "react";
import axios from "axios";
import uuid from "uuid";
import { pure } from "recompose";
import { TableProps } from "../../interfaces/";
import "./Table.scss";
import pageAData from "./../../data/page-a-data.json";
import tick from "../../icons/tick.svg";

// console.log(jsonData);

const Table: React.SFC<TableProps> = props => {
  const tableColumns = props.tableColumns;
  const pathToIndividualData = "./../../data";
  const endPoint = `${pathToIndividualData}${props.dataUrl}`;
  console.table(pageAData);

  fetch(endPoint)
    .then(res => res.json())
    .then(data => {
      console.log("data:", data);
    });

  fetch(endPoint)
    .then(res => res.text()) // convert to plain text
    .then(text => console.log(text)); // then log it out

  //   const [data, setData] = useState<null | { hits: any }>(null);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const result = await axios(`${pathToIndividualData}${props.dataUrl}`);
  //       console.log(result);

  //       setData(result.data);
  //     };
  //     fetchData();
  //   }, [props.dataUrl]);

  return (
    <>
      {/* <ul>
        {data!.hits.map(item => (
          <li key={uuid.v4()}>{item.name}</li>
        ))}
      </ul> */}

      {/* <p>{props.dataUrl}</p> */}
      <table key={uuid.v4()} role="table" data-testid="Table">
        <thead>
          <tr>
            {tableColumns.map(column => (
              <th>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pageAData.map(person => {
            return (
              <tr>
                <td>{person.name}</td>
                <td>
                  <a href={"mailto:" + person.email}>{person.email}</a>
                </td>
                <td>{person.location}</td>
                <td>
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
    </>
  );
};

export default pure(Table);
