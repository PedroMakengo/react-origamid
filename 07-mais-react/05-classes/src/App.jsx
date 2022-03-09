import React from "react";
import Produtos from "./components/Produtos";

const App = () => {
  const [ativar, setAtivar] = React.useState(true);
  return (
    <div>
      {ativar && <Produtos titulo="Esses são os produtos" />}
      <button onClick={() => setAtivar((ativar) => !ativar)}>Toogle</button>
    </div>
  );
};
export default App;
