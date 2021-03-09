import { render, screen } from '@testing-library/react';
import React from 'react';

import Header from './Header';

describe('<Header />', () => {
  it('renders Header component', () => {
    render(<Header />);

    const headElement = screen.getByText(/this is header/i);
    expect(headElement).toBeInTheDocument();
  });
});
