import React from "react";
import ReactDOM from "react-dom";
import MainContainer from "./..";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MainContainer></MainContainer>, div);
});

test("Renders MainContainer Correctly", done => {
  const { getByTestId } = render(<MainContainer />);
  expect(getByTestId("MainContainer")).toHaveTextContent("Thumbnail Gallery");
  done();
});

it("Matches snapshot", () => {
  const tree = renderer.create(<MainContainer></MainContainer>).toJSON();
  expect(tree).toMatchSnapshot();
});
