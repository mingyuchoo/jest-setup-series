/******************************************************************************
 * REFERENCE WEB SITE
 * https://medium.com/@ericdcobb/advanced-react-component-mocks-with-jest-and-react-testing-library-f1ae8838400b
 *
 ******************************************************************************/
import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

// SIMPLE INLINE COMPONENT MOCKS

// Usecase #1
// eslint-disable-next-line react/display-name
jest.mock('./layout/Header', () => () => <header>Header</header>); // Component definition is missing display name
// Usecase #2
jest.mock('./layout/Nav', () => {
  // Component definition is missing display names
  // eslint-disable-next-line react/display-name
  return () => {
    return <nav>Nav</nav>;
  };
});
// Usecase #3 - BEST WAY
jest.mock('./layout/Section', () => {
  // Component definition has display namess
  const Section = () => {
    return <section>Section</section>;
  };
  return Section;
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
