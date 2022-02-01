// const menu = {
//   seletor: ".principal",
// };

// console.log(menu.seletor.toLowerCase());

// function upperName(name) {
//   return name.toUpperCase();
// }

// const lowerName = (name) => name.toLowerCase();
// console.log(upperName("andré"));
// console.log(lowerName("andré"));

// function handleMouse(event) {
//   if (window.pageYOffset > 100) alert("Chegamos");
// }

// window.addEventListener("scroll", handleMouse);

const frutas = ["banana", "uva"];

// const [fruta1, fruta2] = frutas;

// const useQuadrado = [
//   4,
//   function (lado) {
//     return 4 * lado;
//   },
// ];

// const [lados, perimetro] = useQuadrado;
// console.log(lados);
// console.log(perimetro(10));

// REST E SPREAD

// function showList(empresa, ...clientes) {
//   clientes.forEach((cliente) => {
//     console.log(cliente, empresa);
//   });
// }

// showList("Google", "Pedro", "Makengo", "Manuel");

const numeros = [10, 5, 20];
const maior = Math.max(...numeros);

console.log(maior);

const numeros2 = [...numeros, 30, 18, 40, 6];

console.log(numeros2);

const carro = {
  cor: "Azul",
  portas: 4,
};

carroAno = { ...carro, ano: 2022 };
console.log(carroAno);
