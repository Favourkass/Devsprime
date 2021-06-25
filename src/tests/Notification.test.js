import React from "react";
import ReactDom from "react-dom";
import Notification from "../components/notification/index";
import { render,screen } from '@testing-library/react';


it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Notification/>, div)
})



describe('Notification', () => {
    test('Notification must have src = the cloudinary link and alt = "Notification"', () => {
      render(<Notification/>);
      const img = screen.getByRole('img');
      expect(img).toHaveAttribute('src');
      expect(img).toHaveAttribute('alt', 'Notification');


    });
});
