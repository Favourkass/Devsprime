import { render, screen } from '@testing-library/react';
import HomePage from '../pages/HomePage';

test('render welcome to Devsprime', () => {
  render(<HomePage />);
  const pElement = screen.getByText(/Welcome to DevsPrime/i);
  expect(pElement).toBeInTheDocument();
});

function sum(x, y) {
  return x + y;
}

describe('sum', () => {
  test('sums up two values', () => {
    expect(sum(2, 4)).toBe(6);
  });
});