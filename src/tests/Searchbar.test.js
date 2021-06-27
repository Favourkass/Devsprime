import React from "react";
import ReactDOM from "react-dom";
import {render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Search from '../components/search/index'


afterEach(cleanup);

it("renders without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render("<Search />", div)
  ReactDOM.unmountComponentAtNode(div)
});


describe('Searchbar component', () => {
    test('checks for props', () => {
        render(<Search/>)
        const search = document.getElementById('search')
        expect(search).toBeInTheDocument();
    })
})

