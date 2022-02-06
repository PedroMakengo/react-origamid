import React from "react";
import Home from "./components/Home/Home";
import Produto from "./components/Produto/Produto";

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica : const {pathname} = window.location;

const data = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const App = () => {
  const { pathname } = window.location;
  console.log(pathname);
  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/produtos">Produtos</a>
        </li>
      </ul>

      {pathname === "/" ? <Home /> : <Produto dados={data} />}
    </div>
  );
};

export default App;
