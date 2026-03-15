// Definindo uma array global
const times = ["São Paulo", "Corinthians", "Flamengo", "Fluminense"];

// Utilizando o método indexOf()
let posicaoItem = times.indexOf("Flamengo");

console.log(times);
console.log(posicaoItem);

// Utilizando o método lastIndexOf()
const times2 = ["São Paulo", "Corinthians", "São Paulo", "São Paulo"];

let posicaoItem2 = times2.lastIndexOf("São Paulo");

console.log(posicaoItem2);

// Utilizando o método includes()
let verificaExistenciaItem = times.includes("Palmeiras");

console.log(verificaExistenciaItem);