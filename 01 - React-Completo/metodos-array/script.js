// Metodos de array

const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados",
];

const precosFiltro = precos.filter((preco) => preco.includes("R$"));
const precoNumeros = precosFiltro.map((preco) => +preco.replace("R$ ", ""));
console.log(precoNumeros);
