// form.js

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

    // Erro na validação do paciente e mensagem de aviso para os dados inválidos.
    var erros =  validaPaciente (paciente);
    
    console.log (erros);

    if (erros.length > 0) {
        exibeMensagensDeErro (erros);
        // form.reset ();
        return;
    }

    // Adicionar o paciente dentro da tabela.
    var tabela = document.querySelector ("#tabela-pacientes");
    tabela.appendChild (pacienteTr);

    //Resetar os campos após clicar no botão adicionar.
    form.reset ();

    // Apaga as mensagens de erro ao serem escritas de forma certa.
    var mensagensErro = document.querySelector ("#mensagens-erro");
    mensagensErro.innerHTML = "";
})

// Exibe mensagens de erros --- forEach = pecorre o array.
function exibeMensagensDeErro (erros) {

    var ul = document.querySelector ("#mensagens-erro");
    ul.innerHTML = "";
    
    erros.forEach (function (erro) {
        var li = document.createElement ("li");
        li.textContent = erro;
        ul.appendChild (li);
    });
}

// Objeto paciente.
function obtemPacienteDoFormulario (form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc (form.peso.value, form.altura.value)
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
    
    var td = document.createElement ("td");
    td.textContent = dado;
    td.classList.add (classe);

    return td;
}

// Testa as propriedades com 'peso' e 'altura', para verificar se os valores são válidos.
function validaPaciente (paciente) {

    var erros = [];

    // erro caso não esteja nada escritos nesses campos.
    if (paciente.nome.length == 0) {
        erros.push ("O nome não pode ser em branco.");
    }

    if (paciente.peso.length == 0) {
        erros.push ("O peso não pode ser em branco.");
    }

    if (paciente.altura.length == 0) {
        erros.push ("A altura não pode ser em branco.");
    }

    if (paciente.gordura.length == 0) {
        erros.push ("A gordura não pode ser em branco.")
    }


    // Validações de 'peso' e 'altura'.
    if (!validaPeso (paciente.peso)) {
        erros.push ("Peso é inválido");
    }

    if (!validaAltura (paciente.altura)) {
        erros.push ("Altura é inválida");
    }  

    return erros;
} 


// Acinama tem uma função anônima (sem parâmetro). Ela funciona igual ao exemplo com a função nominada acima.

// console.log (botaoAdicionar); ----> assim pode ser testado e ver se tá realmente chamando o btn.