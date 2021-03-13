import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Counter from './Counter';

describe('<Counter />', () => {
  it('renders Counter component', () => {
    render(<Counter />);

    //screen.debug(); // for debugging

    const result = screen.getByTestId('result');

    expect(result).toHaveTextContent('0');
  });
  it('increments counter', async () => {
    render(<Counter />);

    //screen.debug(); // for debugging

    const plus = screen.getByTestId('plus');

    fireEvent.click(plus);

    // https://testing-library.com/docs/dom-testing-library/api-async/
    const result = await screen.findByText('1', {}, { timeout: 3000 }); // 3초 기다림

    //screen.debug(); // for debugging

    expect(result).toBeInTheDocument();
    expect(result).toHaveTextContent('1');
  });
  it('decrements counter', () => {
    render(<Counter />);

    //screen.debug(); // for debugging

    const minus = screen.getByTestId('minus');

    fireEvent.click(minus);

    const result = screen.getByTestId('result');

    //screen.debug(); // for debugging

    expect(result).toHaveTextContent('-1');
  });
});
