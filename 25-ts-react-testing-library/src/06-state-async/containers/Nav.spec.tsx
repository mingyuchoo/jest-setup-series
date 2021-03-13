import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Nav from './Nav';

describe('<Nav />', () => {
  it('renders Nav component', () => {
    render(<Nav />);
    const navElement = screen.getByText(/^search$/i);
    expect(navElement).toBeInTheDocument();
  });

  describe('Given a keyword', () => {
    describe('When type in the inputbox', () => {
      it('should display same keword in the paragraph', () => {
        const { getByPlaceholderText, getByText } = render(<Nav />);

        // screen.debug(); // before

        const input = getByPlaceholderText(/enter keyword/i);
        const paraphgraph = getByText(/^search something/i);

        fireEvent.change(input, { target: { value: 'react' } });

        // screen.debug(); // after

        expect(paraphgraph).toHaveTextContent(/react/i);
      });
    });
    describe('When click button', () => {
      it('should be clear the keyword', () => {
        render(<Nav />);

        const input = screen.getByPlaceholderText(/enter keyword/i);
        const button = screen.getByText(/^search$/i);
        const paraphgraph = screen.getByText(/^search something/i);

        // screen.debug(); // initial

        fireEvent.change(input, { target: { value: 'react' } });

        // screen.debug(); // after typed in inputbox

        fireEvent.click(button);

        // screen.debug(); // after clicked button

        expect(input).toHaveTextContent('');
        expect(paraphgraph).toHaveTextContent(/^search something/i);
      });
    });
  });
});
