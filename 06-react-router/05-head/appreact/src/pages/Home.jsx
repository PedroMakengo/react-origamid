import React from "react";
import Head from "../components/Head";

const Home = () => {
  return (
    <div>
      <Head title="Home" description="Essa é a home" />

      {/* Instalando o react-helmet */}
      <h1>Home</h1>
      <p>Essa é a home</p>
    </div>
  );
};

export default Home;
