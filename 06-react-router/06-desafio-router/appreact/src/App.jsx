import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Contatos from "./components/Contatos";
import Produtos from "./components/Produtos";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="contatos" element={<Contatos />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
