import { compileAndroidCode } from './06-exception';

describe('06-exception', () => {
  it('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // You can also use the exact error message or regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  });
});
