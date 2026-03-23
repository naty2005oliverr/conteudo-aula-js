// Utilizando o evento de carregamento lead
const img = document.querySelector(".minha-imagem");

img.addEventListener("load", function() {
  const elemento = document.querySelector(".info-carregamento");
 elemento.innerHTML = "A imagem foi carregada.";
});

console.log(img);