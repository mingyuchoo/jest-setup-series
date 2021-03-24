import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

import NoMatch from './NoMatch';

describe('<NoMatch />', () => {
  describe('Positive Case', () => {
    it('should render no match page.', () => {
      const history = createMemoryHistory();
      history.push('/nomatch');
      render(
        <Router history={history}>
          <NoMatch />
        </Router>
      );

      expect(screen.getByText(/no match/i)).toBeInTheDocument();
    });
  });

  describe('Negative Case', () => {
    //
  });
});
