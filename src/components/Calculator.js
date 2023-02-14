import React from 'react';

const Calculator = () => (
  <div className="calculator">
    <div className="display">
      <div />
    </div>
    <div className="keys">
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button" className="act">÷</button>
    </div>
    <div className="keys">
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button" className="act">X</button>
    </div>
    <div className="keys">
      <button type="button">6</button>
      <button type="button">5</button>
      <button type="button">4</button>
      <button type="button" className="act">-</button>
    </div>
    <div className="keys">
      <button type="button">3</button>
      <button type="button">2</button>
      <button type="button">1</button>
      <button type="button" className="act">+</button>
    </div>
    <div className="keys">
      <button type="button" className="zero">0</button>
      <button type="button" className="dot">.</button>
      <button type="button" className="dot act">=</button>
    </div>
  </div>
);

export default Calculator;
