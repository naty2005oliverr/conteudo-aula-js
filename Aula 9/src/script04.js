// Criando a primeira função
function primeiraFuncao() {
     console.log("Somente a dor coletiva gera a união");
}

primeiraFuncao();

// Realizando operações com funções
function multiplicar(a , b) {
    return(a * b);
}

let mult1 = multiplicar(10, 5);
let mult2 = multiplicar(4, 8);
let mult3 = multiplicar(30, 3);

const element = document.querySelector(".ex1");
element.innerText = `
    ${mult1} \n
    ${mult2} \n
    ${mult3} \n
`;
