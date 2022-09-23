import operate from '../operate';

/** * @jest-environment jsdom */

describe('Testing mathematic operations', () => {
  test('Addition', () => {
    expect(operate(4, 2, '+')).toBe('6');
  });

  test('Substraction', () => {
    expect(operate(6, 3, '-')).toBe('3');
  });

  test('Multiplication', () => {
    expect(operate(4, 2, 'x')).toBe('8');
  });

  test('Division', () => {
    expect(operate(6, 3, '÷')).toBe('2');
  });
});
