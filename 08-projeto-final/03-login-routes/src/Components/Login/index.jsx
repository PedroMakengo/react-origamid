import React from "react";

import { Routes, Route } from "react-router-dom";
import LoginCreare from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginPassordReset from "./LoginPassordReset";
import LoginPasswordLost from "./LoginPasswordLost";

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreare />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPassordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
