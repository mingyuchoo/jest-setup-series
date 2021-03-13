/* eslint-disable react/display-name */
/******************************************************************************
 * REFERENCE WEB SITE
 * https://medium.com/@ericdcobb/advanced-react-component-mocks-with-jest-and-react-testing-library-f1ae8838400b
 *
 ******************************************************************************/
import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

// SIMPLE INLINE COMPONENT MOCKS
// Component definition is missing display name but it works.
jest.mock('./layout/Header', () => () => <header>Header</header>);
jest.mock('./layout/Nav', () => () => <nav>Nav</nav>);
jest.mock('./layout/Section', () => {
  return () => {
    return <section>Section</section>;
  };
});

describe('<App />', () => {
  describe('This is not UNIT test.', () => {
    it('renders App component', () => {
      const { container } = render(<App />);
      const header = container.querySelector('header');
      expect(header).toBeInTheDocument();
    });
  });
  describe('This is UNIT test.', () => {
    it('renders App component', () => {
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
