import React from "react";

const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho"];
const App = () => {
  const [cor, setCor] = React.useState("");
  // HandleChange
  function handleChange({ target }) {
    if (target.checked) {
      setCor(target.value);
    } else {
      setCor(cor.filter((cor) => cor !== target.value));
    }
  }

  return (
    <form>
      {coresArray.map((field) => (
        <label key={field} style={{ textTransform: "capitalize" }}>
          <input
            type="checkbox"
            name={field}
            value={field}
            checked={cor === field}
            onChange={handleChange}
          />
          {field}
        </label>
      ))}
    </form>
  );
};
export default App;
