import React from "react";
import { GlobalStorage } from "./context/GlobalContext";
import Produto from "./components/Produto";
import Button from "./components/Button";

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
      <Button />
    </GlobalStorage>
  );
};
export default App;
