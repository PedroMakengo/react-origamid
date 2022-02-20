import React from "react";
import { GlobalContext } from "../../context/GlobalContext";
import ProdutoItem from "../ProdutoItem";

const Produto = () => {
  const { produto } = React.useContext(GlobalContext);

  if (produto === null) return null;
  return (
    <div>
      <ul>
        {produto.map(({ id, nome }) => (
          <ProdutoItem key={id} nome={nome} />
        ))}
      </ul>
    </div>
  );
};

export default Produto;
