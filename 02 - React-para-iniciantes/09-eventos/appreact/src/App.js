import React from "react";

const App = () => {
  function handleScroll(event) {
    console.log(event);
  }
  window.addEventListener("scroll", handleScroll);
  return <div style={{ height: "200vh" }}></div>;
};
export default App;
