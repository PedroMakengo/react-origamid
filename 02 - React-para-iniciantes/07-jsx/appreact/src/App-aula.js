import React from "react";

const titulo = <h1>Esses é um título</h1>;

const App = () => {
  const random = Math.random();
  const ativo = true;

  function mostrarNome(sobrenome) {
    return "Pedro " + sobrenome;
  }

  const carro = {
    marca: "Ford",
    rodas: "4",
  };

  const estiloP = {
    color: "blue",
    fontSize: "2rem",
  };

  return (
    <>
      {titulo}
      <p>{true ? "asdaded" : "dasdads "}</p>
      {mostrarNome("Miguel")}
      <p style={estiloP}>{new Date().getFullYear()}</p>
      <p style={estiloP}>{carro.marca}</p>
      <p>{carro.rodas}</p>
      <p className={ativo ? "ativo" : "inativo"}> {(random * 1000) / 50} </p>
    </>
  );
};
export default App;
