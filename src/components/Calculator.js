import React from 'react';

const Numa = () => <input type="number" id="calc-curr-num" defaultValue="0" name="calc-curr-num" />;

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <section id="calculator-sec">

        <div className="calculator">
          <div className="calc-num">
            <Numa />
          </div>

          <div className="calc-buttons">
            <button type="button" className="calc-btn">AC</button>
            <button type="button" className="calc-btn">+/-</button>
            <button type="button" className="calc-btn">%</button>
            <button type="button" className="calc-btn">÷</button>
            <button type="button" className="calc-btn">7</button>
            <button type="button" className="calc-btn">8</button>
            <button type="button" className="calc-btn">9</button>
            <button type="button" className="calc-btn">x</button>
            <button type="button" className="calc-btn">4</button>
            <button type="button" className="calc-btn">5</button>
            <button type="button" className="calc-btn">6</button>
            <button type="button" className="calc-btn">-</button>
            <button type="button" className="calc-btn">1</button>
            <button type="button" className="calc-btn">2</button>
            <button type="button" className="calc-btn">3</button>
            <button type="button" className="calc-btn">+</button>
            <button type="button" className="calc-btn span-2">0</button>
            <button type="button" className="calc-btn">.</button>
            <button type="button" className="calc-btn">=</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
