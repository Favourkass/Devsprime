import renderer from 'react-test-renderer'; 
import React from "react";
import ReactDOM from "react-dom";
import {render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CartNofication from "../IconWithText";

afterEach(cleanup);

it("renders without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render("<MyIcons />", div)
  ReactDOM.unmountComponentAtNode(div)
});


it("matches snapshot", ()=>{
  const renderer = require('react-test-renderer');
  const tree = renderer.create("<IconWithText />").toJSON();
  expect(tree).toMatchSnapshot();
});