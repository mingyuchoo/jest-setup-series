import { render, screen } from '@testing-library/react';
import React from 'react';

import Header from './Header';

describe('<Header />', () => {
  it('renders Header component', () => {
    render(<Header />);

    const headElement = screen.getByText(/this is header/i);
    expect(headElement).toBeInTheDocument();
    expect(headElement).toHaveTextContent('This is Header');
  });
  it('renders a link', () => {
    render(<Header />);
    const aLink = screen.getByText(/github/i);
    expect(aLink).toBeInTheDocument();
    expect(aLink).toHaveAttribute('target', '_blank');
    expect(aLink).toHaveAttribute('href', 'https://github.com');
  });
});
