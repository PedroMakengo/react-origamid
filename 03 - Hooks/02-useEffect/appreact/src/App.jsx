import React from "react";
import Produto from "./components/Produto";

// [ ] Quando o usuário clicar em um dos botões, faça um fetch do Produto
// [ ] https://ranekapi.dev/json/api/produto
// [ ] Mostre o nome e preço na tela (separe essa informação em um componente produto)
// [ ] Defina o produto clicado como uma preferência do usuário no localStore
// [ ] Quando o usuário entrar no site, se exister um produto no localStore

const App = () => {
  const [produto, setProduto] = React.useState(null);

  // Existe produto no localStore
  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  // Adicionar produto no localStore
  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem("produto", produto);
  }, [produto]);

  // Setar produto clicado pelo o usuário
  function handleClick({ target }) {
    setProduto(target.innerText);
  }
  return (
    <div>
      <h1>Preferência: {produto} </h1>
      <button onClick={handleClick} style={{ marginRight: "1rem" }}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>

      <Produto produto={produto} />
    </div>
  );
};
export default App;
