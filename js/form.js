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

    // Criar a <tr> e a <td>  do paciente;
    var pacienteTr = montaTr (paciente); 

    // Adicionar o paciente dentro da tabela.
    var tabela = document.querySelector ("#tabela-pacientes");
    tabela.appendChild (pacienteTr);

    //Resetar os campos após clicar no botão adicionar.
    form.reset ();
})

// Objeto paciente.
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

// Cria a <tr> com as classes também.
function montaTr (paciente) {

    var pacienteTr = document.createElement ("tr"); 
    
    //Criando classes aos elementos.
    pacienteTr.classList.add ("paciente");

    // Adicionar <td> nas <tr>, criando como filho do <tr> e monta uma <td> com as classes.
    pacienteTr.appendChild (montaTd (paciente.nome, "info-nome"));
    pacienteTr.appendChild (montaTd (paciente.peso, "info-peso"));
    pacienteTr.appendChild (montaTd (paciente.altura, "info-altura"));
    pacienteTr.appendChild (montaTd (paciente.gordura, "info-gordura")); 
    pacienteTr.appendChild (montaTd (paciente.imc, "info-imc"));

    return pacienteTr;
}

// Cria uma <td> juntamente com as classes.
function montaTd (dado, classe) {
    
    var td =document.createElement ("td");
    td.textContent = dado;
    td.classList.add (classe);

    return td;
}


// Acinama tem uma função anônima (sem parâmetro). Ela funciona igual ao exemplo com a função nominada acima.

// console.log (botaoAdicionar); ----> assim pode ser testado e ver se tá realmente chamando o btn.
