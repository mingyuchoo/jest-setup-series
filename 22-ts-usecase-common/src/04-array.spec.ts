describe('04-array', () => {
  const shoppingList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'];

  it('The shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });
});
