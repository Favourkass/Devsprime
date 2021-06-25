import { cleanup, render, screen } from '@testing-library/react';

import Paragraph from '../components/TextParagraph/ui/Paragraph';
import React from 'react';
import ReactDOM from 'react-dom';

afterEach(() => {
    cleanup();
});

it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Paragraph />,div)
})

test('renders paragraphs correctly', () => {
    const text = "Semaj Africa is an online education platform";
    render(<Paragraph text={text}/>,)
    const paragraphElement = screen.getByTestId('paragraphId');
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveTextContent('Semaj Africa is an online education platform')
})
