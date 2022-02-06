import React from "react";
import ItemPropriedade from "./ItemPropriedade";

const styleItemProduto = {
  border: "1px solid #000",
  padding: "20px",
  marginBottom: "1rem",
};

const ItemProduto = ({ nome, propriedades }) => {
  return (
    <div style={styleItemProduto}>
      <h3>{nome}</h3>
      <ul>
        {propriedades.map((propriedade) => (
          <ItemPropriedade key={propriedade} propriedade={propriedade} />
        ))}
      </ul>
    </div>
  );
};

export default ItemProduto;
