import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import Styles from './Pagenav.module.css';


function Pagenav() {
  return (
    <nav className={Styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to={"./pricing"}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={"./product"}>Products</NavLink>
        </li>
        <li>
          <NavLink to={"./login"}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Pagenav;
