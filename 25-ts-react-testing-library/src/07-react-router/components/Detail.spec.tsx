import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Route, Router } from 'react-router-dom';

import Detail from './Detail';

describe('<Detail />', () => {
  describe('Positive Case', () => {
    it('should render "detail" detail page.', () => {
      const history = createMemoryHistory();
      history.push('/list/detail');
      render(
        <Router history={history}>
          <Route exact path={'/list/:slug'}>
            <Detail />
          </Route>
        </Router>
      );

      expect(screen.getByText(/detail/i)).toBeInTheDocument();
    });
    it('should render "1" detail page.', () => {
      const history = createMemoryHistory();
      history.push('/list/1');
      render(
        <Router history={history}>
          <Route exact path={'/list/:slug'}>
            <Detail />
          </Route>
        </Router>
      );

      expect(screen.getByText(/1/i)).toBeInTheDocument();
    });
  });

  describe('Negative Case', () => {
    //
  });
});
