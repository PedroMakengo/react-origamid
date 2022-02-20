import React from "react";
import { GlobalContext } from "../../context/GlobalContext";
import ProdutoItem from "../ProdutoItem";

const Produto = () => {
  const data = React.useContext(GlobalContext);
  const dataProduto = data.produto;

  function limparDados() {
    data.setProduto(null);
  }

  if (dataProduto === null) return null;
  return (
    <div>
      <ul>
        {dataProduto.map(({ id, nome }) => (
          <ProdutoItem key={id} nome={nome} />
        ))}
      </ul>
      <button onClick={limparDados}>Limpar Dados</button>
    </div>
  );
};

export default Produto;
