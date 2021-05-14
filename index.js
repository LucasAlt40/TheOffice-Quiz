// 1- Quando clicar na alternativa certa, a alternativa deverá receber as classes
// acertou e bloqueado e adicionar 1 ponto

// 2- Quando clicar na alternativa errada, a alternativa deverá receber as classes
// errou e bloqueado

// 3- Quando clicar em qualquer alternativa independente da resposta,
// todas as alternativas devem receber a classe bloqueado

const perguntaCerta = document.querySelectorAll(".correta");
const perguntaErrada = document.querySelectorAll(".errada");
const opcoes = document.querySelectorAll('opcao') // alternativas que devem ser bloqueadas
var pontos = 0;

for (const pergunta of perguntaCerta) {
  pergunta.addEventListener("click", () => {
    pergunta.classList.add("acertou", "bloqueado");
    pontos++;
    console.log(pontos);
  });
}

for (const pergunta of perguntaErrada) {
  pergunta.addEventListener("click", () => {
    pergunta.classList.add("errou", "bloqueado");
  });
}
