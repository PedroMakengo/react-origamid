import React from "react";

import LoginCreare from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginPassordReset from "./LoginPassordReset";
import LoginPasswordLost from "./LoginPasswordLost";

import { UserContext } from "../../UserContext";
import { Routes, Route, Navigate } from "react-router-dom";

const Login = () => {
  // const { login } = UserContext(UserContext);

  // if (login === true) return <Navigate to="/conta" />;
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
