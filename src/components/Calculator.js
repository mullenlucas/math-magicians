import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
      err: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    const calc = calculate(this.state, event.target.textContent);
    this.setState(calc);
  };

  render() {
    const {
      total,
      next,
      err,
      operation,
    } = this.state;
    return (
      <section id="calculator-sec">

        <div className="calculator">
          <div className="calc-num">
            { next || operation || total || err || 0 }
          </div>

          <div className="calc-buttons">
            <button type="button" onClick={this.handleClick} className="calc-btn">AC</button>
            <button type="button" onClick={this.handleClick} className="calc-btn">+/-</button>
            <button type="button" onClick={this.handleClick} className="calc-btn">%</button>
            <button type="button" onClick={this.handleClick} className="calc-btn">÷</button>
            <button type="button" onClick={this.handleClick} className="calc-btn">7</button>
            <button type="button" onClick={this.handleClick} className="calc-btn">8</button>
            <button type="button" onClick={this.handleClick} className="calc-btn">9</button>
            <button type="button" onClick={this.handleClick} className="calc-btn">x</button>
            <button type="button" onClick={this.handleClick} className="calc-btn">4</button>
            <button type="button" onClick={this.handleClick} className="calc-btn">5</button>
            <button type="button" onClick={this.handleClick} className="calc-btn">6</button>
            <button type="button" onClick={this.handleClick} className="calc-btn">-</button>
            <button type="button" onClick={this.handleClick} className="calc-btn">1</button>
            <button type="button" onClick={this.handleClick} className="calc-btn">2</button>
            <button type="button" onClick={this.handleClick} className="calc-btn">3</button>
            <button type="button" onClick={this.handleClick} className="calc-btn">+</button>
            <button type="button" onClick={this.handleClick} className="calc-btn span-2">0</button>
            <button type="button" onClick={this.handleClick} className="calc-btn">.</button>
            <button type="button" onClick={this.handleClick} className="calc-btn">=</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
