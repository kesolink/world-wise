import React from "react";
import { NavLink } from "react-router-dom";
import Styles from './Pagenav.module.css';

function Pagenav() {
  return (
    <nav className={Styles.nav}>
      <ul>
        <li>
          <NavLink to={"/"}>Homepage</NavLink>
        </li>
        <li>
          <NavLink to={"./pricing"}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={"./product"}>Products</NavLink>
        </li>
        <li>
          <NavLink to={"./login"} className={Styles.ctaLink}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Pagenav;
