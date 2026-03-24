// Utilizando o método setInterval
const elemento = document.querySelector('.meu-relogio');

setInterval(mostrarRelogio, 1000);

function mostrarRelogio() {
    const data = new Date();
    const horas = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();

    elemento.innerHTML = `${horas} : ${minutos} : ${segundos}`;
}

// Utilizando o método setTimeout()
const conteudo = document.querySelector(".meu-conteudo");
const botao = document.querySelector(".elemento-botao");

botao.addEventListener("click", handlerTimeout);

function handlerTimeout() {
    setTimeout(mostrarConteudo, 2000);
}

function mostrarConteudo() {
    conteudo.innerHTML = `Esse texto está aparecendo após dois segundos da intereção do botão.`;
}

// Utilizando o método setInterval()
const exibirNumeros = document.querySelector(".conteudo-contador");
const botaoInicio = document.querySelector(".botao-inicio");
const botaoPausar = document.querySelector(".botao-pausar");

let intervalo;
let contador = 0;

botaoInicio.addEventListener("click", () => {
    intervalo = setInterval(contadora, 1000);
});

botaoPausar.addEventListener("click", () => {
    clearInterval(intervalo);
})

function contadora() {
    contador++;
    exibirNumeros.innerHTML = contador;
}