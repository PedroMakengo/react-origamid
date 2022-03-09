import React from "react";
import Exemplo from "./components/Exemplo";

function reducer(state, action) {
  console.log(state);

  switch (action) {
    case "aumentar":
      return state + 1;
    case "diminuir":
      return state - 1;
    default:
      throw new Error();
  }
}
const App = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch("aumentar")}>+</button>
      <button onClick={() => dispatch("diminuir")}>-</button>
      <p>{state}</p>
      <Exemplo />
    </div>
  );
};
export default App;
