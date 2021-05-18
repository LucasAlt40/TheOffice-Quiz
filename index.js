// 1- Quando clicar na alternativa certa, a alternativa deverá receber as classes
// acertou e bloqueado e adicionar 1 ponto

// 2- Quando clicar na alternativa errada, a alternativa deverá receber as classes
// errou e bloqueado

// 3- Quando clicar em qualquer alternativa independente da resposta,
// todas as alternativas devem receber a classe bloqueado

const perguntaCerta = document.querySelectorAll(".correta");
const perguntaErrada = document.querySelectorAll(".errada");
const opcao = document.querySelectorAll(".opcao");
var pontos = 0;

/*  Método de bloquear o click  */

for (const op of opcao) {
  op.addEventListener("click", () => {
    op.classList.add("bloqueado");
  });
}

/* #### Método de bloquear o click #### */

for (const pergunta of perguntaCerta) {
  pergunta.addEventListener("click", () => {
    pergunta.classList.add("acertou");
    pontos++;
    console.log(pontos);
  });
}

for (const pergunta of perguntaErrada) {
  pergunta.addEventListener("click", () => {
    pergunta.classList.add("errou");
  });
}
