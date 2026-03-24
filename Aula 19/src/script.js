// Adicionando eventos 
const button = document.querySelector(".btn");
const elementoConteudo = document.querySelector(".conteudo");
const elementoEstilo = document.querySelector("elemento-estilo");

button.addEventListener("click", mostarConteudo);

function mostarConteudo() {
    elementoConteudo.innerHTML = "Você clicou no botão!";
    elementoConteudo.classList.toggle("ativo")
}

// Removendo eventos
const elementoConteudo2 = document.querySelector(".adicionar-conteudo");
const btnAdicionar = document.querySelector(".btn-add");
const btnRemover = document.querySelector(".btn-rmv");
const btnTeste = document.querySelector(".btn-teste");

function adicionarTexto() {
    elementoConteudo2.innerHTML += "Texto adicionado! ";
}

btnAdicionar.addEventListener("click", () => {
    btnTeste.addEventListener("click", adicionarTexto);
});

btnRemover.addEventListener("click", () => {
    btnTeste.removeEventListener("click", adicionarTexto);
})

// Prevenindo Eventos
const link = document.querySelector(".link");
const informacoes = document.querySelector(".info");

link.addEventListener("click", function (event) {
    event.preventDefault();
    informacoes.innerHTML = "Ocarregamento do link foi bloqueado.";
    
})