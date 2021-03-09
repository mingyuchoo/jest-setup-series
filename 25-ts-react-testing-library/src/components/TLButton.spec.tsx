import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import TLButton from './TLButton';

describe('<TLButton />', () => {
  it('should same last saved snapshot', () => {
    render(<TLButton />);
    fireEvent.click(screen.getByText('Click'));
  });
});
