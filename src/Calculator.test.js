import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './components/Calculator';

describe('Simulate calculations made by the user', () => {
  test('Input key 3, input addition button, input key 6, equals to', () => {
    render(<Calculator />);

    const calcRes = document.getElementById('calc-num-id');

    const firstInput = screen.getByText('3');
    const scndInput = screen.getByText('+');
    const thirdInput = screen.getByText('6');
    const resultInput = screen.getByText('=');

    fireEvent.click(firstInput);
    fireEvent.click(scndInput);
    fireEvent.click(thirdInput);
    fireEvent.click(resultInput);

    expect(calcRes.textContent).toBe('9');
  });
});
