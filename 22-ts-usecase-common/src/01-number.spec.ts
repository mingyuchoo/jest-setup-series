describe('01-number', () => {
  it('1 + 2 = 3', () => {
    expect(1 + 2).toBe(3);
  });
  it('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for nmbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });
  it('adding floating point numbers', () => {
    const value = 0.1 + 0.2;

    //expect(value).toBe(0.3);      // This won't work.
    expect(value).toBeCloseTo(0.3); // This works.
  });
});
