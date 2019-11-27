import React from "react";
import ReactDOM from "react-dom";
import NavBar from "..";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NavBar></NavBar>, div);
});

test("Renders NavBar Correctly", done => {
  const { getByTestId } = render(<NavBar label="Close" />);
  expect(getByTestId("NavBar")).toHaveTextContent("Page A");
  done();
});

it("Matches snapshot", () => {
  const tree = renderer.create(<NavBar></NavBar>).toJSON();
  expect(tree).toMatchSnapshot();
});
