import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Contatos from "./components/Contatos";
import Produtos from "./components/Produtos";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
