import { render, screen } from '@testing-library/react';
import React from 'react';

import Hello, { a } from './Hello';

describe('<Hello />', () => {
  it('should be a == true', () => {
    render(<Hello />);
    expect(a).toBe(true);
  });
});
