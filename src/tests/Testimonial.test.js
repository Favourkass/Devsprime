import React from "react";
import ReactDOM from "react-dom";
import {render, screen, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Testimonial from '../components/testimonial/index'


afterEach(cleanup);

it("renders without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render("<Testimonial />", div)
  ReactDOM.unmountComponentAtNode(div)
});


describe('Testimonial component', () => {
    test('checks for props', () => {
        render(<Testimonial/>)
        const testi = document.getElementById('Testimonial')
        expect(testi).toBeInTheDocument();
    })
})

