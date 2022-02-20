import React from "react";

const ProdutoItem = ({ id, nome }) => {
  return <li key={id}>{nome}</li>;
};
export default ProdutoItem;
