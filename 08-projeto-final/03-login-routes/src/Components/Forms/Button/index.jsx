import React from "react";
import styles from "./index.module.css";

const Button = ({ children }) => {
  return (
    <button disabled className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
