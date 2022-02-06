import React from "react";

// Mostre os dados da aplicação, como apresentado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situaução estiver ativa pinte verde, inativa vermelho
// Se o gosto for maior 10000 mostre uma mensagem

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
};

const App = () => {
  const dados = luana;

  // Pegando o total de compras
  const total = dados.compras
    .map((item) => +item.preco.replace("R$ ", ""))
    .reduce((anterior, atual) => anterior + atual);

  return (
    <div>
      <p>Nome : {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{" "}
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {dados.ativa ? "Ativa" : "Inativa"}
        </span>
      </p>
      <p>Total: R$ {total}</p>
      {total > 10000 && <p>"Você está gastando muito"</p>}
    </div>
  );
};
export default App;
