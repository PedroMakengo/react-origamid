// fetch(`https://jsonplaceholder.typicode.com/users`)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// Async await

async function fetchProdutos(url) {
  const response = await fetch(url);
  const json = await response.json();

  return json;
}

const users = fetchProdutos("https://jsonplaceholder.typicode.com/users");

console.log(users);
