import { cleanup, render, screen } from '@testing-library/react';

import { Header, SubHeader, Paragraph } from '../components/typography/index';
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
    render(<Paragraph children={text}/>,)
    const paragraphElement = screen.getByTestId('paraId');
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveTextContent('Semaj Africa is an online education platform')
})

test('renders heading correctly', () => {
    const text = "Semaj Africa is an online education platform";
    render(<Header children={text}/>,)
    const paragraphElement = screen.getByTestId('headerId');
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveTextContent('Semaj Africa is an online education platform')
})

test('renders subheading correctly', () => {
    const text = "Semaj Africa is an online education platform";
    render(<SubHeader children={text}/>,)
    const paragraphElement = screen.getByTestId('subHeaderId');
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveTextContent('Semaj Africa is an online education platform')
})
