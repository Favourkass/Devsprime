import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Button from "../components/inputWithButton/button";
import Input from "../components/inputWithButton/input";

describe('Button', () => {
    it('renders button correctly', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Button />, div)
    })
})

describe('Input', () => {
    it('renders input correctly', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Input />, div)
    })
})