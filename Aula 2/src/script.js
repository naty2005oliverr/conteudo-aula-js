// Exemplos de operador de atribuição
let x = 100;

x = x - 5;
//console.log(x);

x = x + 5;
//console.log(x);

// Exemplo de Aritmética em JavaScript
let soma = 5 + 5 + 4;
//console.log(soma);

//const primeiroNome = 'Nathalia';
//const ultimoNome = ' Almeida';

let nomeCompleto = 'Nathalia' + "" + ' Oliveira';

//console.log(nomeCompleto);

// Exemplos de tipos em JavaScript
// String
let cor = 'Azul';
let fruta = 'Laranja';
console.log(cor);
console.log(fruta);

//number
let soma1 = 5 + 5;
let subtracao = 10 - 3;
console.log(soma1);
console.log(subtracao);

//BigInt
let bigint = 1234567890123456789012345;
let bigint2 = BigInt(123456789012345);
console.log(bigint);
console.log(bigint2);

//Boolean
let valorVerdadeiro = true;
let valorFalso = false;
console.log(valorVerdadeiro);
console.log(false);

//Object
const carro = {
    marca: 'Chevrolet',
    modelo: 'Impala 1967',
    cor: 'black',
}

console.log(carro);
console.log('A marca do carro é: ' + carro.marca);

//Array Object
const frutas = ['Lajanja','Banana', 'Uva', 'Abacaxi', 'Morango'];

console.log(frutas);

//Date Object
const data = new Date;
console.log(data);

//Undefined
let indefinido;
console.log(indefinido);

//Null
let nulo = null;
console.log(nulo);

//Symbol
let y = Symbol();
console.log(y);

//Exempplos de typeof
let stringTipo = "300";
let numberTipo = 300;
//const tipoDado = typeof stringTipo;
const tipoDado = typeof numberTipo;
console.log(tipoDado);

//Exemplo de Boolean
let cinco = 5;
let  comparacao = cinco == 8
console.log(comparacao);
