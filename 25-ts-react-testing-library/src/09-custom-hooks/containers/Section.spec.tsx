import { render, screen } from '@testing-library/react';
import React from 'react';

import Section from './Section';

describe('<Section />', () => {
  it('renders Section component', () => {
    render(<Section />);

    const element = screen.getByText(/this is section/i);
    expect(element).toBeInTheDocument();
  });
});
