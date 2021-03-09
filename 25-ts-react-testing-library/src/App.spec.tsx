import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('<App />', () => {
  it('renders App component', () => {
    const { container } = render(<App />);
    const header = container.querySelector('header');
    expect(header).toBeInTheDocument();
  });
});
