const perguntaC = document.querySelectorAll(".correta");
const perguntaE = document.querySelectorAll(".errada");
const opcao = document.querySelectorAll(".opcao");
console.log(opcao)
var pontos = 0;

perguntaC.forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    pergunta.classList.add("acertou");
    this.opcao.classList.add("bloqueado");
    pontos++;
    console.log(pontos);
  });
});

perguntaE.forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    pergunta.classList.add("errou");
    this.opcao.classList.add("bloqueado");
  });
});
