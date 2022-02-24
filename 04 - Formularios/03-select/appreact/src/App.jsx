import React from "react";

const App = () => {
  const [select, setSelect] = React.useState("");
  return (
    <form>
      <select
        id="produtos"
        value={select}
        onChange={({ target }) => setSelect(target.value)}
      >
        <option value="" disabled>
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <br />
      {select}
    </form>
  );
};
export default App;
