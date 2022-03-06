import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contatos from "./components/Contatos";
import Produtos from "./components/Produtos";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
