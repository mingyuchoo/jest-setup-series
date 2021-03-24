import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Route, Router } from 'react-router-dom';

import List from './List';

describe('<List />', () => {
  describe('Positive Case', () => {
    it('should render list page.', () => {
      const history = createMemoryHistory();
      history.push('/list');
      render(
        <Router history={history}>
          <Route exact path={'/list'}>
            <List />
          </Route>
        </Router>
      );

      expect(screen.getByText(/you are on the list page/i)).toBeInTheDocument();
    });
  });

  describe('Negative Case', () => {
    //
  });
});
