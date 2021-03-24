/**********************************************************
 * https://testing-library.com/docs/example-react-router/
 *
 **********************************************************/
// import '@testing-library/jest-dom/extend-expect';

import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

import App from './App';
import Detail from './components/Detail';
import Home from './components/Home';
import List from './components/List';
import LocationDisplay from './components/LocationDisplay';
import NoMatch from './components/NoMatch';

jest.mock('./components/Detail', () => {
  const Detail = () => {
    return <div>Detail</div>;
  };
  return Detail;
});

jest.mock('./components/Home', () => {
  const Home = () => {
    return <div>MockedHome</div>;
  };
  return Home;
});

jest.mock('./components/List', () => {
  const List = () => {
    return <div>MockedList</div>;
  };
  return List;
});

jest.mock('./components/LocationDisplay', () => {
  const LocationDisplay = () => {
    return <div>MockedLocationDisplay</div>;
  };
  return LocationDisplay;
});

jest.mock('./components/NoMatch', () => {
  const NoMatch = () => {
    return <div>MockedNoMatch</div>;
  };
  return NoMatch;
});

// const mockedDetail = Detail as jest.Mocked<typeof Detail>;
// const mockedHome = Home as jest.Mocked<typeof Home>;
// const mockedList = List as jest.Mocked<typeof List>;
// const mockedLocationDisplay = LocationDisplay as jest.Mocked<typeof LocationDisplay>;
// const mockedNoMatch = NoMatch as jest.Mocked<typeof NoMatch>;

describe('<App />', () => {
  describe('Positive Cases', () => {
    it('should render initial page.', () => {
      const history = createMemoryHistory();
      render(
        <Router history={history}>
          <App />
        </Router>
      );

      expect(screen.getByText(/mockedhome/i)).toBeInTheDocument();
    });

    it('should route to list page.', () => {
      const history = createMemoryHistory();
      render(
        <Router history={history}>
          <App />
        </Router>
      );
      fireEvent.click(screen.getByText(/list/i), { button: 0 });

      expect(screen.getByText(/mockedlist/i)).toBeInTheDocument();
    });
  });
  describe('Negative Cases', () => {
    it('landing on not existing page.', () => {
      const history = createMemoryHistory();

      history.push('/some/bad/route');

      render(
        <Router history={history}>
          <App />
        </Router>
      );

      expect(screen.getByText(/mockednomatch/i)).toBeInTheDocument();
      expect(screen.getByText(/mockedlocationdisplay/i)).toBeInTheDocument();
    });
  });
});
