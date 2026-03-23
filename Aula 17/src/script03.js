// Utilizando o key events
const conteudo = document.querySelector(".conteudo");
const conteudo2 = document.querySelector(".conteudo2");
const campo = document.querySelector("#campo");

campo.addEventListener("keydown", handleTecla);
campo.addEventListener("input", handleTexto);

function handleTecla(evento) {
  conteudo.innerHTML = "Você digitou: " + evento.key;
}

function handleTexto(evento) {
  conteudo2.innerHTML = "Você digitou: " + evento.target.value;
}

// Exemplo de detecção de tecla
const campo2 = document.querySelector("#campoEnter");
const conteudo3 = document.querySelector(".conteudo3");

campo2.addEventListener("keydown", handleCondicao);

function handleCondicao(evento) {
  if (evento.code === "Enter") {
    conteudo3.innerHTML = "A tecla Enter foi pressionada!";
  }
}