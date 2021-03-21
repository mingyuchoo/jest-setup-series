import { act, renderHook } from '@testing-library/react-hooks';

import useCounter from './useCounter';

describe('useCounter.ts', () => {
  it('should increment counter', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increase();
    });
    act(() => {
      result.current.decrease();
    });
    expect(result.current.counter).toBe(0);
  });
});
