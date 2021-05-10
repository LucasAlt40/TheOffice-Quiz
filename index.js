const perguntaC = document.querySelector(".correta");
const perguntaE = document.querySelectorAll(".errada");
const next = document.querySelector(".next");

const pergunta1 = document.querySelector(".pergunta1");
const pergunta2 = document.querySelector(".pergunta2");

var pontos = 0;

next.addEventListener("click", () => {
  pergunta2.style.display = "block";
  pergunta1.style.display = "none";
});

perguntaC.addEventListener("click", () => {
  perguntaC.classList.add("acertou");
  perguntaC.classList.add("bloqueado");
  pontos++;
  console.log(pontos);
  next.style.display = "block";
});

perguntaE.forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    pergunta.classList.add("errou");
    pergunta.classList.add("bloqueado");
    next.style.display = "block";
  });
});
