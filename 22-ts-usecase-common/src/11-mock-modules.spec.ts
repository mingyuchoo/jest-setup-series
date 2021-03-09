import { Users } from './11-mock-modules';
import { foo } from './11-mock-foo';

import axios from 'axios';

jest.mock('axios');
jest.mock('./11-mock-foo');
// IMPORTANT in TypeScript
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Mocking Modules', () => {
  it('should fetch users', () => {
    const users = [{ name: 'Bob' }];
    const resp = { data: users };

    mockedAxios.get.mockResolvedValue(resp);
    mockedAxios.get.mockImplementation(() => Promise.resolve(resp));

    return Users.all().then((data) => expect(data).toEqual(users));
  });

  it('mockImplementation', () => {
    const myMockFn = jest.fn((cb) => cb(null, true));
    myMockFn((err: unknown, val: boolean) => console.log(val));
  });

  it('mock module foo', () => {
    const mockFoo = foo as jest.Mock<number>;

    mockFoo.mockImplementation(() => 42);
    expect(foo()).toBe(42);
  });

  it('mutilple function calls', () => {
    const myMockFn = jest
      .fn()
      .mockImplementationOnce((cb) => cb(null, true))
      .mockImplementationOnce((cb) => cb(null, false));

    myMockFn((err: undefined, val: boolean) => console.log(val));
    myMockFn((err: undefined, val: boolean) => console.log(val));
  });

  it('execute the default implementation', () => {
    const myMockFn = jest
      .fn(() => 'default')
      .mockImplementationOnce(() => 'first call')
      .mockImplementationOnce(() => 'second call');

    //console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
    expect(myMockFn()).toBe('first call');
    expect(myMockFn()).toBe('second call');
    expect(myMockFn()).toBe('default');
    expect(myMockFn()).toBe('default');
  });

  it('reteurn `this`', () => {
    const myObj = {
      myMethod: jest.fn().mockReturnThis(),
    };

    console.log(myObj.myMethod());

    //// is the same as BUT in TypeScript it doesn't work.
    //const otherObj = {
    //  myMethod: jest.fn(function () {
    //    return this;
    //  }),
    //};
    // console.log(otherObj.myMethod());
  });

  it('mock names', () => {
    const myMockFn = jest
      .fn()
      .mockReturnValue('default')
      .mockImplementation((scalar: number) => 42 + scalar)
      .mockName('add42');

    // call function once
    myMockFn();

    // The mock function was called at least once
    expect(myMockFn).toBeCalled();
  });

  it('custom matchers', () => {
    const mockFunc = jest.fn();

    const arg1 = 'arg1';
    const arg2 = 'arg2';

    mockFunc(arg1, arg2);

    // The mock function was called at least once
    expect(mockFunc).toHaveBeenCalled();

    // The mock function was called at least once with the specified args
    expect(mockFunc).toHaveBeenCalledWith(arg1, arg2);

    // The last call to the mock function was called with the specified args
    expect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);

    // All calls and the name of the mock is written as a snapshot
    expect(mockFunc).toMatchSnapshot();
  });

  it('common matchers', () => {
    const mockFunc = jest.fn().mockName('a mock name');

    const arg1 = 42;
    const arg2 = 'arg2';

    mockFunc(arg1, arg2);

    // The mock function was called at least once
    expect(mockFunc.mock.calls.length).toBeGreaterThan(0);

    // The mock function was called at least once with the specified args
    expect(mockFunc.mock.calls).toContainEqual([arg1, arg2]);

    // The last call to the mock function was called with the specified args
    expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([arg1, arg2]);

    // The first arg of the last call to the mock function was `42`
    // (note that there is no sugar helper for this specific of an assertion)
    expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(42);

    // A snapshot will check that a mock was invoked the same number of times,
    // in the same order, with the same arguments. It will also assert on the name.
    expect(mockFunc.mock.calls).toEqual([[arg1, arg2]]);
    expect(mockFunc.getMockName()).toBe('a mock name');
  });
});
