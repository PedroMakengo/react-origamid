import React from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Costumizado</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Produto;
