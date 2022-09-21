import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
    err: null,
  });

  const handleClick = (event) => {
    setState((inCmd) => calculate(inCmd, event.target.textContent));
  };

  return (
    <section id="calculator-sec">
      <div id="calc-title">
        <h2>Let&apos;s do some math!</h2>
      </div>

      <div className="calculator">
        <div className="calc-num">
          { state.next || state.operation || state.total || state.err || 0 }
        </div>

        <div className="calc-buttons">
          <button type="button" onClick={handleClick} className="calc-btn">AC</button>
          <button type="button" onClick={handleClick} className="calc-btn">+/-</button>
          <button type="button" onClick={handleClick} className="calc-btn">%</button>
          <button type="button" onClick={handleClick} className="calc-btn">÷</button>
          <button type="button" onClick={handleClick} className="calc-btn">7</button>
          <button type="button" onClick={handleClick} className="calc-btn">8</button>
          <button type="button" onClick={handleClick} className="calc-btn">9</button>
          <button type="button" onClick={handleClick} className="calc-btn">x</button>
          <button type="button" onClick={handleClick} className="calc-btn">4</button>
          <button type="button" onClick={handleClick} className="calc-btn">5</button>
          <button type="button" onClick={handleClick} className="calc-btn">6</button>
          <button type="button" onClick={handleClick} className="calc-btn">-</button>
          <button type="button" onClick={handleClick} className="calc-btn">1</button>
          <button type="button" onClick={handleClick} className="calc-btn">2</button>
          <button type="button" onClick={handleClick} className="calc-btn">3</button>
          <button type="button" onClick={handleClick} className="calc-btn">+</button>
          <button type="button" onClick={handleClick} className="calc-btn span-2">0</button>
          <button type="button" onClick={handleClick} className="calc-btn">.</button>
          <button type="button" onClick={handleClick} className="calc-btn">=</button>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
