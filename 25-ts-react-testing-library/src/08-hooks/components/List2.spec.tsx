import { render, screen } from '@testing-library/react';
import React from 'react';

import List2 from './List2';

describe('<List2 />', () => {
  it('should render', async () => {
    render(<List2 />);

    const div = await screen.findByText(/loaded/i, {}, { timeout: 500 });

    expect(div).toBeTruthy();
  });
});
