import { NavLink } from "react-router-dom";
import React from "react";

//STYLES
import styles from "./TheNavigation.module.scss";

export const TheNavigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavLink to="/" activeClassName={styles.active} exact>
        Home
      </NavLink>
      <NavLink to="/tunes" activeClassName={styles.active}>
        Tunes
      </NavLink>
      <NavLink to="/about" activeClassName={styles.active}>
        About
      </NavLink>
    </nav>
  );
};
