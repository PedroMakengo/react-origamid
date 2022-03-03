import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink activeStyle={{ color: "tomado" }} to="/" end>
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink activeStyle={{ color: "tomado" }} to="sobre">
        Sobre
      </NavLink>
      |{" "}
      <NavLink activeStyle={{ color: "tomado" }} to="login">
        Login
      </NavLink>
    </div>
  );
};

export default Header;
