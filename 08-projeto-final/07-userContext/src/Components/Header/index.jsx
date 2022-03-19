import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

import { ReactComponent as Dogs } from "../../Assets/dogs.svg";

import { UserContext } from "../../UserContext";

const Header = () => {
  const context = React.useContext(UserContext);
  console.log(context);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label="Home">
          <Dogs />
        </Link>
        <Link to="/login" className={styles.login}>
          {context.usuario} Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
