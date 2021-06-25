import React from "react";
import ReactDom from "react-dom";
import Logo from "../components/logo/index";
import { render,screen } from '@testing-library/react';


it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Logo/>, div)
})

it("renders text content correctly", () => {
    render(<Logo />);
    const pElement = screen.getByText(/Prime/i);
    expect(pElement).toBeInTheDocument();
})

describe('Logo', () => {
    test('Logo must have src = cloudinary link and alt = "Logo"', () => {
      render(<Logo/>);
      const img = screen.getByRole('img');
      expect(img).toHaveAttribute('src');
      expect(img).toHaveAttribute('alt', 'Logo');
    });
});
