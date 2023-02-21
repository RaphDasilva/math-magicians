import React from 'react';
import style from '../Style/Quote.module.css';

const Quote = () => (
  <>
    <p className={style.quote}>
      Mathematics is not about numbers, equations, computations, or algorithms:
      it is about understanding.
      <span>-William Paul Thurston</span>
    </p>
  </>
);

export default Quote;
