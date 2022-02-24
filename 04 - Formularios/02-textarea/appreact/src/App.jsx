import React from "react";

const App = () => {
  const [textarea, setTextarea] = React.useState("");
  return (
    <form>
      <textarea
        value={textarea}
        onChange={({ target }) => setTextarea(target.value)}
        rows="5"
      />
    </form>
  );
};
export default App;
