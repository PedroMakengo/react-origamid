import React from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Button = () => {
  const { limparDados } = React.useContext(GlobalContext);
  return <button onClick={limparDados}>Limpar Dados</button>;
};

export default Button;
