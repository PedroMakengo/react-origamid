import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Produtos from "./components/Produtos";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Contatos from "./components/Contatos";
import Produto from "./components/Produto";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contatos" element={<Contatos />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
