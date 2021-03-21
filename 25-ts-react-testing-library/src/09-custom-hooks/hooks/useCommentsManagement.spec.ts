import { act, renderHook } from '@testing-library/react-hooks';

import useCommentsManagement from './useCommentsManagement';

describe('useCommentsManagement.ts', () => {
  it('should fetch comments', async () => {
    const { result, waitForNextUpdate, waitForValueToChange } = renderHook(() => useCommentsManagement());
    act(() => {
      void result.current.fetchComments();
    });
    await waitForNextUpdate();
    // await waitForValueToChange(
    //   () => {
    //     return result.current.comments;
    //   },
    //   { interval: 100, timeout: 3000 }
    // );

    console.log(result.current.comments.length);
    expect(result.current.comments.length).not.toBe(0);
  });
});
