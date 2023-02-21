import React from 'react';
import { Link } from 'react-router-dom';
import style from '../Style/Nav.module.css';

const Nav = () => (
  <header className={style.header}>
    <h1> Math Magicians </h1>
    <nav className={style.nav}>
      <Link className={style.link} to="/">Home</Link>
      <Link className={style.link} to="/calculator">Calculator</Link>
      <Link className={style.link} to="/quote">Quote</Link>
    </nav>
  </header>
);

export default Nav;
