import { cleanup, render, screen } from '@testing-library/react';

import Hero from "../components/hero/index";
import React from 'react';
import ReactDOM from 'react-dom';

afterEach(() => {
    cleanup();
});

it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Hero />,div)
})

test('renders paragraphs correctly', () => {
    const button = <button>Press me</button>;
    render(<Hero>{button}</Hero>)
    const headerElement = screen.getByTestId('heroId');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent("Press me")
})
