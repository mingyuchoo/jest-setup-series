import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

import LocationDisplay from './LocationDisplay';

describe('<LocationDisplay />', () => {
  it('should render "/about"', () => {
    const history = createMemoryHistory();
    history.push('/about');
    render(
      <Router history={history}>
        <LocationDisplay />
      </Router>
    );
    const div = screen.getByText('/about');
    expect(div).toBeInTheDocument();

    const button = screen.getByText('go home');
    fireEvent.click(button, { button: 1 });

    const about = screen.getByText('/');
    expect(about).toBeInTheDocument();
  });
});
