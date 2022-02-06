import React from "react";
import Titulo from "../Titulo/Titulo";
import ItemProduto from "./ItemProduto";

const Produto = ({ dados }) => {
  return (
    <section>
      <Titulo texto="Produto" />
      <div>
        {dados.map(({ nome, propriedades }) => (
          <ItemProduto key={nome} nome={nome} propriedades={propriedades} />
        ))}
      </div>
    </section>
  );
};

export default Produto;
