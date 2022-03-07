import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink className={styles.link} to="/" end>
            Produto
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="contatos">
            Contatos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
