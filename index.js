// 1- Quando clicar na alternativa certa, a alternativa deverá receber as classes
// acertou e bloqueado e adicionar 1 ponto

// 2- Quando clicar na alternativa errada, a alternativa deverá receber as classes
// errou e bloqueado

// 3- Quando clicar em qualquer alternativa independente da resposta,
// todas as alternativas devem receber a classe bloqueado

const perguntaCerta = document.querySelectorAll(".correta");
const perguntaErrada = document.querySelectorAll(".errada");
const quiz1 = document.querySelector(".quiz1")
const quiz2 = document.querySelector(".quiz2")
const quiz3 = document.querySelector(".quiz3")
const quiz4 = document.querySelector(".quiz4")
const quiz5 = document.querySelector(".quiz5")
const quiz6 = document.querySelector(".quiz6")
const quiz7 = document.querySelector(".quiz7")
const quiz8 = document.querySelector(".quiz8")
const quiz9 = document.querySelector(".quiz9")
const quiz10 = document.querySelector(".quiz10")
var pontos = 0;


/*  Método de bloquear o click  */

// Não consegui achar outro método para fazer isso de uma forma mais curta
// e pratíca.

quiz1.addEventListener('click', () => {
  quiz1.classList.add('bloqueado')
})

quiz2.addEventListener('click', () => {
  quiz2.classList.add('bloqueado')
})

quiz3.addEventListener('click', () => {
  quiz3.classList.add('bloqueado')
})

quiz4.addEventListener('click', () => {
  quiz4.classList.add('bloqueado')
})

quiz5.addEventListener('click', () => {
  quiz5.classList.add('bloqueado')
})

quiz6.addEventListener('click', () => {
  quiz6.classList.add('bloqueado')
})

quiz7.addEventListener('click', () => {
  quiz7.classList.add('bloqueado')
})

quiz8.addEventListener('click', () => {
  quiz8.classList.add('bloqueado')
})

quiz9.addEventListener('click', () => {
  quiz9.classList.add('bloqueado')
})

quiz10.addEventListener('click', () => {
  quiz10.classList.add('bloqueado')
})

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
