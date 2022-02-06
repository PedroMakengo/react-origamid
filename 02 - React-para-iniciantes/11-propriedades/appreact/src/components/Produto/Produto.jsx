import React from "react";
import ItemProduto from "./ItemProduto";

const Produto = ({ dados }) => {
  return (
    <div>
      <h1>Produto</h1>
      <div>
        {dados.map(({ nome, propriedades }) => (
          <ItemProduto key={nome} nome={nome} propriedades={propriedades} />
        ))}
      </div>
    </div>
  );
};

export default Produto;
