import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

import LocationDisplay from './LocationDisplay';

describe('<LocationDisplay />', () => {
  it('should render "/list"', () => {
    const history = createMemoryHistory();
    history.push('/list');
    render(
      <Router history={history}>
        <LocationDisplay />
      </Router>
    );
    const listPage = screen.getByText('/list');
    expect(listPage).toBeInTheDocument();

    const button = screen.getByText('go home');
    fireEvent.click(button, { button: 1 });

    const homePage = screen.getByText('/');
    expect(homePage).toBeInTheDocument();
  });
});
