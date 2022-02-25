import React from "react";
import Checkbox from "./components/Forms/Checkbox";
import Input from "./components/Forms/Input";
import Radio from "./components/Forms/Radio";
import Select from "./components/Forms/Select";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");
  const [fruta, setFruta] = React.useState("");
  const [linguagens, setLinguagens] = React.useState([]);
  const [termos, setTermos] = React.useState("");

  return (
    <form>
      <h2>Termos</h2>
      <Checkbox
        options={["Li e aceito os termos."]}
        value={termos}
        setValue={setTermos}
      />
      <h2>Checkbox</h2>
      <Checkbox
        options={["JavaScript", "PHP", "Ruby"]}
        value={linguagens}
        setValue={setLinguagens}
      />
      <h2>Cores</h2>
      <Radio options={["Azul", "Vermelha"]} value={cor} setValue={setCor} />
      <h2>Frutas</h2>
      <Radio
        options={["Limão", "Laranja", "Uva"]}
        value={fruta}
        setValue={setFruta}
      />
      <Select
        options={["Smartphone", "Tablet"]}
        value={produto}
        setValue={setProduto}
      />
      <Input label="Nome" id="nome" value={nome} setValue={setNome} />
      <Input label="Email" id="email" value={email} setValue={setEmail} />
      <button>Enviar</button>
    </form>
  );
};
export default App;
