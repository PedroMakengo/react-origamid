import React from "react";
import Produto from "./components/Produto";

// [ ] Criar uma interface com 3 botões, um para cada produto.
// [ ] Ao clicar no botão faça um fetch a api e mostre os dados
// [ ] Mostre apenas um produto por vez
// [ ] Mostre a mensagem carregando... enquanto o fetch é realizado

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick({ target }) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${target.innerText}`
    );

    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }
  return (
    <div>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        smartphone
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        tablet
      </button>

      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
};
export default App;
