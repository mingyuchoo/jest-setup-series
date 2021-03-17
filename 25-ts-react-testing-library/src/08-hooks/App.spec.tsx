import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('<App />', () => {
  describe('When run app', () => {
    it('should render App component.', () => {
      const { container } = render(<App />);

      // BEST WAY
      const title = screen.getByText(/react testing library/i);
      expect(title.textContent).toMatch(/react testing library/i);

      // CAN DI THIS
      const div = container.querySelector('div.App');
      expect(div).toBeInTheDocument();
    });
  });
});
