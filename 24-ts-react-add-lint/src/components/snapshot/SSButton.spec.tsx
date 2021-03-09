import { render, screen } from '@testing-library/react';
import React from 'react';

import SSButton from './SSButton';

describe('<SSButton />', () => {
  it('should same last saved snapshot', () => {
    const page = render(<SSButton />);
    expect(page).toMatchSnapshot();
  });
});
