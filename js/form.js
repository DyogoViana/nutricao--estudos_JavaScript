// ações no formulário.

// mudar título do h1.
var titulo = document.querySelector(".titulo");
titulo.textContent = "Pollyana Nutricionista";


// titulo.addEventListener ('click', mostraMensagem);

// function mostraMensagem () {
//     console.log ("Olá, eu fui clicado!");
// }


// Ações do botão "adicionar".
var botaoAdicionar = document.querySelector ("#adicionar-paciente");

botaoAdicionar.addEventListener ("click", function (event) {
    event.preventDefault ();
    console.log ("Oi, eu sou o botão e fui clicado.")
})
// Acinama tem uma função anônima (sem parâmetro). Ela funciona igual ao exemplo com a função nominada acima.

// console.log (botaoAdicionar); ----> assim pode ser testado e ver se tá realmente chamando o btn.

