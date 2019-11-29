import React from "react";
import ReactDOM from "react-dom";
import Home from "..";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home></Home>, div);
});

test("Renders Home Correctly", done => {
  const { getByTestId } = render(<Home />);
  expect(getByTestId("Home")).toHaveTextContent("Home");
  done();
});

it("Matches snapshot", () => {
  const tree = renderer.create(<Home></Home>).toJSON();
  expect(tree).toMatchSnapshot();
});
