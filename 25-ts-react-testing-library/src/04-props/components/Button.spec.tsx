import { render, screen } from '@testing-library/react';
import React from 'react';

import Button from './Button';

describe('<Button />', () => {
  it('renders Button component', () => {
    render(<Button text={'Click'} />);

    const button = screen.getByText(/click/i);

    expect(button).toBeInTheDocument();
  });
});
