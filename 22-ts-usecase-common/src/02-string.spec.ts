describe('02-string', () => {
  it('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });
  it('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });
});
