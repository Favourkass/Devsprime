import React from "react";
import ReactDOM from "react-dom";
import {render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CartNofication from "./../CartNotification";

afterEach(cleanup);

it("renders without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render("<CartNotification />", div)
  ReactDOM.unmountComponentAtNode(div)
});

it("renders cart correctly", ()=>{
  const {getByTestId} = render(<CartNofication number="3" />)
  expect(getByTestId("button")).toHaveTextContent("3")
});

it("renders cart correctly", ()=>{
  const {getByTestId} = render(<CartNofication number="7" />)
  expect(getByTestId("button")).toHaveTextContent("7")
});
