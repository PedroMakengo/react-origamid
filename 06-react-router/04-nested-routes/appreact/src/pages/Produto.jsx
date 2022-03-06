import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Produto = () => {
  // Serve para ter o params passamento na minha rota dinamica
  const params = useParams();
  // Onde fica todas as informações da rota
  const location = useLocation();

  console.log(location);
  // Entender o URL
  const search = new URLSearchParams(location.search);
  console.log(search.get("q"));

  return (
    <div>
      <h1>Produto: {params.id}</h1>
    </div>
  );
};

export default Produto;
