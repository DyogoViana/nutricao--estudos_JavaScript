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

    // Extraindo informações do paciente do "form".
    var paciente = obtemPacienteDoFormulario (form);

    console.log (paciente);

    // Cria a <tr> e a <td> do paciente.
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
    imcTd.textContent = calculaImc (peso, altura);

    // Adicionar <td> nas <tr>.
    pacienteTr.appendChild (nomeTd);
    pacienteTr.appendChild (pesoTd);
    pacienteTr.appendChild (alturaTd);
    pacienteTr.appendChild (gorduraTd); 
    pacienteTr.appendChild (imcTd);

    // Adicionar o paciente dentro da tabela.
    var tabela = document.querySelector ("#tabela-pacientes");
    tabela.appendChild (pacienteTr);
})

function obtemPacienteDoFormulario (form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc (form.altura.value, form.peso.value)
    }
    return paciente;
}



// Acinama tem uma função anônima (sem parâmetro). Ela funciona igual ao exemplo com a função nominada acima.

// console.log (botaoAdicionar); ----> assim pode ser testado e ver se tá realmente chamando o btn.
