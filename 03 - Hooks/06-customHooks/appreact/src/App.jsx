import React from "react";
import useFetch from "./useFetch";
import useLocalStorage from "./useLocalStorage";

const App = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");
  const { request, data, loading } = useFetch();

  React.useEffect(() => {
    request(`https://ranekapi.origamid.dev/json/api/produto`);
  }, []);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  if (loading) return <div>Carregando...</div>;
  if (data)
    return (
      <div>
        <p>Produto preferido: {produto} </p>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>

        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  else return null;
};
export default App;
