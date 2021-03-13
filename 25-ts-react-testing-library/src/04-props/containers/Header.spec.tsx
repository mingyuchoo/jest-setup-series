import { render, screen } from '@testing-library/react';
import React from 'react';

import Header from './Header';

// Button mock
jest.mock('../components/Button', () => {
  const Button = () => {
    return <button>Mock Button</button>;
  };
  return Button;
});

describe('<Header />', () => {
  it('renders Header component', () => {
    render(<Header />);

    //screen.debug();

    const element = screen.getByText(/this is header/i);
    expect(element).toBeInTheDocument();
  });
});
