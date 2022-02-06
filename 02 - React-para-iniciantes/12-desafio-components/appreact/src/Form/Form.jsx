import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  const arr = ["Item 1", "Item 2"];
  return (
    <form action="">
      <Input id="email" type="email" label="Email" />
      <Input id="password" type="password" label="Senha" />
      <Button items={arr} />
    </form>
  );
};

export default Form;
