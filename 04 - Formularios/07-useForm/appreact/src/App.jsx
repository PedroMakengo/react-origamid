import React from "react";

import Input from "./components/Forms/Input";
import useForm from "./Hooks/useHooks";

const App = () => {
  const cep = useForm("cep");
  const email = useForm("email");
  const nome = useForm();
  const sobrenome = useForm();

  function handleSubmit(event) {
    event.preventDefault();

    if (cep.validate() && email.validate() && nome.validate()) {
      console.log("Enviou");
    } else {
      console.log("Enviou");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        {...cep}
        placeholder="00000-000"
      />
      <Input label="Nome" id="nome" type="text" {...nome} />
      <Input label="Sobrenome" id="sobrenome" type="text" {...sobrenome} />
      <Input type="email" label="E-mail" id="email" {...email} />
      <button>Enviar</button>
    </form>
  );
};
export default App;
