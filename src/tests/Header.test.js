import { cleanup, render, screen } from '@testing-library/react';

import CustomHeader from "../components/TextParagraph/ui/HeaderComponent";
import React from 'react';
import ReactDOM from 'react-dom';

afterEach(() => {
    cleanup();
});

it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<CustomHeader />,div)
})

test('renders paragraphs correctly', () => {
    const text = "Learn A Skill.";
    render(<CustomHeader title={text}/>)
    const headerElement = screen.getByTestId('headerId');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent("Learn A Skill.")
})
