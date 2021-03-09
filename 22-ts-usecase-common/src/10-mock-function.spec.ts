/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { forEach } from './10-mock-function';

describe('MockFunctions', () => {
  it('.mock property', () => {
    const myMock = jest.fn();

    const a = new myMock();
    a.name = 'a';
    const b = { name: 'b' };
    const bound = myMock.bind(b);
    bound();

    // 인스턴스 개수를 확인
    console.log(myMock.mock.instances);
    // > [ <a>, <b>]

    // mock 함수는 한 번 호출됨
    expect(myMock.mock.calls.length).toBe(2);

    console.log(myMock());
  });

  it('.mock property: mockCallbck', () => {
    const mockCallback = jest.fn((x: number) => 42 + x);

    forEach([0, 1], mockCallback);

    // mock 함수는 두 번 호출됨
    expect(mockCallback.mock.calls.length).toBe(2);

    // 첫 번째 호출에서 첫 번째 인자는 0이다.
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // 두 번째 호출에서 첫 번째 인자는 1이다.
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // 첫 번째 호출에서 반환 값은 42이다.
    expect(mockCallback.mock.results[0].value).toBe(42);
  });

  it('Mock Return Values', () => {
    const myMock = jest.fn();

    console.log(myMock());
    // > undefined

    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

    console.log(myMock(), myMock(), myMock(), myMock());
    // > 10 x true true
  });

  it('Mock Return Values: filter', () => {
    const filterTestFn = jest.fn();

    // Make the mock return `true`for the first call,
    // and `false`for the second call
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter(filterTestFn);

    console.log(result);
    // > [11]

    console.log(filterTestFn.mock.calls);
    // > [ [ 11, 0, [ 11, 12 ] ], [ 12, 1, [ 11, 12 ] ] ]
    console.log(filterTestFn.mock.calls[0][0]);
    // 11
    console.log(filterTestFn.mock.calls[0][1]);
    // 12
  });
});
