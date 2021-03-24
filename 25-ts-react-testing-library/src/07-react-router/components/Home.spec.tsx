import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Route, Router } from 'react-router-dom';

import Home from './Home';

describe('<Home />', () => {
  describe('Positive Case', () => {
    it('should render home page.', () => {
      const history = createMemoryHistory();
      history.push('/');
      render(
        <Router history={history}>
          <Route exact path={'/'}>
            <Home />
          </Route>
        </Router>
      );

      expect(screen.getByText(/you are home/i)).toBeInTheDocument();
    });
  });
});
