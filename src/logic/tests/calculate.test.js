import calculate from '../calculate';

/** * @jest-environment jsdom */

describe('Test calculate funcitonality', () => {
  test('Equal button returns the total number calculated', () => {
    const obj = {
      next: null,
      operation: '+',
      total: 84,
    };
    calculate({}, '=');
    expect(obj.total).toBe(84);
  });

  test('AC button returns null when such object has null value', () => {
    const obj = {
      next: null,
      operation: null,
      total: null,
    };
    calculate({}, 'AC');
    expect(obj.total).toBe(null);
  });
});
