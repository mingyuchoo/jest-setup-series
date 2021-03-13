/***************************************
 * Using Simple Inline Component Mocks
 *
 * https://medium.com/@ericdcobb/advanced-react-component-mocks-with-jest-and-react-testing-library-f1ae8838400b
 *
 ***************************************/
import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

// BAD WAY - Component definition is missing display name
// jest.mock('./containers/Header', () => () => <header>Header</header>);

// GOOD WAY
jest.mock('./containers/Header', () => {
  const Header = () => {
    return <header>Header</header>;
  };
  return Header;
});

// Nav Mock
jest.mock('./containers/Nav', () => {
  const Nav = () => {
    return <nav>Nav</nav>;
  };
  return Nav;
});

describe('<App />', () => {
  describe('This is RIGHT UNIT test', () => {
    it('renders JUST App component', () => {
      const { container } = render(<App />);

      //screen.debug(); // for debugging

      // CAN DO THIS
      const div = container.querySelector('div.App');
      expect(div).toBeInTheDocument();

      // GOOD WAY
      const title = screen.getByText(/react testing library/i);
      expect(title.textContent).toMatch(/react testing library/i);
    });
  });
});
