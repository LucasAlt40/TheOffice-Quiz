const opcao = document.querySelectorAll(".opcao");
const perguntaC = document.querySelectorAll(".correta");
const perguntaE = document.querySelectorAll(".errada");
const teste = document.querySelector(".teste");

for(pergunta of perguntaC) {
  pergunta.onclick = () => {
    const per = this.document.querySelector(".correta")
    per.classList.add("acertou")
  }

}





















/* const perguntaC = document.querySelectorAll(".correta");
const perguntaE = document.querySelectorAll(".errada");
const opcao = document.querySelectorAll(".opcao");
const teste = document.querySelector(".teste");
console.log(opcao);
var pontos = 0;

for (op of opcao) {
  perguntaC.forEach((pergunta) => {
    pergunta.addEventListener("click", () => {
      pergunta.classList.add("acertou");
      const test = this.document.querySelector(".teste");
      test.classList.add("bloqueado");
      pontos++;
      console.log(pontos);
    });
  });

  perguntaE.forEach((pergunta) => {
    pergunta.addEventListener("click", () => {
      pergunta.classList.add("errou");
      const test = this.document.querySelector(".teste");
      test.classList.add("bloqueado");
    });
  });
} */
