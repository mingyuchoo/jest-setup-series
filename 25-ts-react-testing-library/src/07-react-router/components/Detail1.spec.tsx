import { render, screen } from '@testing-library/react';
import React from 'react';
import { useParams } from 'react-router-dom';

import Detail from './Detail';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  __esModule: true,
  useHistory: () => ({ push: () => jest.fn() }),
  useParams: jest.fn(),
}));

describe('<Detail /> Use case 1', () => {
  describe('Positive Case', () => {
    it('should render "detail" detail page.', () => {
      useParams.mockReturnValue({ slug: 'detail' });
      render(<Detail />);

      expect(screen.getByText(/detail/i)).toBeInTheDocument();
    });
    it('should render "1" detail page.', () => {
      useParams.mockReturnValue({ slug: '1' });
      render(<Detail />);

      expect(screen.getByText(/1/i)).toBeInTheDocument();
    });
  });
});
