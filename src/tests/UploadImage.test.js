import React from "react";
import ReactDOM from "react-dom";
import {render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UploadImage from "../components/uploadImage/index";

afterEach(cleanup);

it("renders without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render("<UploadImage />", div)
  ReactDOM.unmountComponentAtNode(div)
});