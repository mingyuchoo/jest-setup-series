import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Counter from './Counter';

describe('<Counter />', () => {
  it('renders Counter component', () => {
    render(<Counter />);

    const result = screen.getByTestId('result');

    expect(result).toHaveTextContent('0');
  });
  it('increments counter', () => {
    render(<Counter />);

    const plus = screen.getByTestId('plus');

    fireEvent.click(plus);

    const result = screen.getByTestId('result');

    expect(result).toHaveTextContent('1');
  });
  it('decrements counter', () => {
    render(<Counter />);

    const minus = screen.getByTestId('minus');

    fireEvent.click(minus);

    const result = screen.getByTestId('result');

    expect(result).toHaveTextContent('-1');
  });
});
