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
    
    var form = document.querySelector ("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement ("tr"); 

    var nomeTd = document.createElement ("td");
    var pesoTd = document.createElement ("td");
    var alturaTd = document.createElement ("td");
    var gorduraTd = document.createElement ("td");
    var imcTd = document.createElement ("td");
    
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    // Adicionar <td> nas <tr>.
    pacienteTr.appendChild (nomeTd);
    pacienteTr.appendChild (pesoTd);
    pacienteTr.appendChild (alturaTd);
    pacienteTr.appendChild (gorduraTd);

    // Adicionar o paciente dentro da tabela.
    var tabela = document.querySelector ("#tabela-pacientes");
    tabela.appendChild (pacienteTr);
})




// Acinama tem uma função anônima (sem parâmetro). Ela funciona igual ao exemplo com a função nominada acima.

// console.log (botaoAdicionar); ----> assim pode ser testado e ver se tá realmente chamando o btn.
