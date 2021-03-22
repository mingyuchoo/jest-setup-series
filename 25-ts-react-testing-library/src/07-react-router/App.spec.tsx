/**********************************************************
 * https://testing-library.com/docs/example-react-router/
 *
 **********************************************************/
import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

import App from './App';
import LocationDisplay from './components/LocationDisplay';

describe('<App />', () => {
  it('full app rendering/navigating', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    // 현재 라우트 상태 확인
    expect(screen.getByText(/you are home/i)).toBeInTheDocument();

    // 버튼 클릭
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/about/i), leftClick);

    // 새 페이지로 변경된 상태 확인
    expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument();
  });

  it('landing on a bad page', () => {
    const history = createMemoryHistory();

    // 강제로 없는 페이지 요청
    history.push('/some/bad/route');

    render(
      <Router history={history}>
        <App />
      </Router>
    );

    expect(screen.getByText(/no match/i)).toBeInTheDocument();
  });

  it('rendering a component that uses useLocation', () => {
    const history = createMemoryHistory();

    const route = '/some-route';
    history.push(route);

    render(
      <Router history={history}>
        <LocationDisplay />
      </Router>
    );

    expect(screen.getByTestId('location-display')).toHaveTextContent(route);
  });
});
