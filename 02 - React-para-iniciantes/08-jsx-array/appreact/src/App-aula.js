import React from "react";

const App = () => {
  // const filmes = ["Before Sunrise", "Before Sunset", "Before Midnight"];

  const livros = [
    { nome: "A Game of Thrones", ano: 1996 },
    { nome: "A Clash of Kings", ano: 1998 },
    { nome: "A Storm of Swords", ano: 2000 },
  ];
  return (
    <ul>
      {livros
        .filter(({ ano }) => ano > 1998)
        .map(({ nome, ano }) => (
          <li key={ano}>
            {nome}, {ano}
          </li>
        ))}
    </ul>
  );
};
export default App;
