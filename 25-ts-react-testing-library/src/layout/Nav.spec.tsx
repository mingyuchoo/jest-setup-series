import { render, screen } from '@testing-library/react';
import React from 'react';

import Nav from './Nav';

describe('<Nav />', () => {
  it('renders Nav component', () => {
    render(<Nav />);
    const navElement = screen.getByText(/this is nav/i);
    expect(navElement).toBeInTheDocument();
  });
});
