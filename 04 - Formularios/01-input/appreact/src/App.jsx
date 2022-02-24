import React from "react";

// Criando um array de field para o meu formulário
const formFields = [
  { id: "nome", label: "Nome", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "senha", label: "Senha", type: "password" },
  { id: "cep", label: "Cep", type: "text" },
  { id: "rua", label: "Rua", type: "text" },
  { id: "numero", label: "Numero", type: "text" },
  { id: "bairro", label: "Bairro", type: "text" },
  { id: "cidade", label: "Cidade", type: "text" },
  { id: "estado", label: "Estado", type: "text" },
];

// Transformando a minha array em um objeto com as suas propriedades
const forms = formFields.reduce((acc, field) => {
  return { ...acc, [field.id]: "" };
}, {});

const App = () => {
  const [form, setForm] = React.useState(forms);
  const [response, setResponse] = React.useState(null);

  function handleChange({ target }) {
    // Reactivando os meus inputs
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://ranekapi.origamid.dev/json/api.usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => {
      // Entender sobre a resposta da api
      setResponse(response);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange} />
        </div>
      ))}
      {response && response.ok && <p>Formulário enviado</p>}
      <button>Enviar</button>
    </form>
  );
};
export default App;
