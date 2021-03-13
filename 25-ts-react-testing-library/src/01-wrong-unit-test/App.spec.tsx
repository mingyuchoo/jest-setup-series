import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('<App />', () => {
  describe('This is not UNIT tests', () => {
    it('but a kind of INTEGRATED component tests.', () => {
      const { container } = render(<App />);

      //screen.debug(); // for debugging

      const header = container.querySelector('header');

      expect(header).toBeInTheDocument();
      expect(header?.textContent).toMatch(/github/i);
    });
  });
});
