import { render, screen } from '@testing-library/react';
import React from 'react';

import List from './List';

/******************************************************************************
 * https://stackoverflow.com/questions/59892259/testing-api-call-inside-useeffect-using-react-testing-library
 *
 ******************************************************************************/
describe('<List />', () => {
  let originFetch: any;
  beforeEach(() => {
    originFetch = (global as any).fetch;
  });
  afterEach(() => {
    (global as any).fetch = originFetch;
  });
  it('should pass', async () => {
    const fakeResponse = { title: 'example text' };
    const mockedResponse = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mockedResponse as any);
    (global as any).fetch = mockedFetch;

    render(<List />);
    const result = await screen.findByTestId('test', {}, { timeout: 3000 });

    expect(result).toBeInTheDocument();
  });
});
