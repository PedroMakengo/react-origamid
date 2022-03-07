import React from "react";
import styles from "./index.module.css";

import foto from "../../img/contato.jpg";
import Head from "../Head";

const Contatos = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>pedromakengo@gmail.com</li>
          <li>+244 921 538 972</li>
          <li>Rua Santa Isabel, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contatos;
