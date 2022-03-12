import React from "react";

const PhotoPost = () => {
  const [token, , setToken] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [idade, setIdade] = React.useState("");
  const [img, setImg] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://dogsapi.origamid.dev/json/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {},
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="token"
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />
      <input
        type="text"
        value={nome}
        placeholder="nnome"
        onChange={({ target }) => setNome(target.value)}
      />
      <input
        type="text"
        value={peso}
        placeholder="peso"
        onChange={({ target }) => setPeso(target.value)}
      />
      <input
        type="text"
        value={idade}
        placeholder="idade"
        onChange={({ target }) => setIdade(target.value)}
      />
      <input
        type="file"
        value={img}
        placeholder="img"
        onChange={({ target }) => setImg(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default PhotoPost;
