import React from "react";
import Header from "./components/Header";

const App = () => {
  const [contar, setContar] = React.useState(0);
  return (
    <div>
      <Header />
      <button onClick={() => setContar((contar) => contar + 1)}>
        {contar}
      </button>
    </div>
  );
};
export default App;
