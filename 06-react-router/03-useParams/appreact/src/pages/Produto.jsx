import React from "react";
import { useParams } from "react-router-dom";

const Produto = () => {
  // const [produto, setProduto] = useState(null);
  const params = useParams();

  // fetch("https://origamid.")
  //   .then((response) => response.json())
  //   .then((json) => setProduto(json));

  console.log(params);
  return (
    <div>
      <h1>Produto: {params.id}</h1>
    </div>
  );
};

export default Produto;
