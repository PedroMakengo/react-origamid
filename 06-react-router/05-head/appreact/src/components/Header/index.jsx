import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log("Mudou a rota", location);
  }, [location]);

  return (
    <div>
      <NavLink activeStyle={{ color: "tomado" }} to="/" end>
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink activeStyle={{ color: "tomado" }} to="sobre">
        Sobre
      </NavLink>{" "}
      |{" "}
      <NavLink activeStyle={{ color: "tomado" }} to="login">
        Login
      </NavLink>
    </div>
  );
};

export default Header;
