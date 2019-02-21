// Buscar Pacientes.

// Botão Buscar Paciente.
var botaoBuscarPaciente = document.querySelector ("#buscar-paciente");

botaoBuscarPaciente.addEventListener ("click", function () {

    console.log ("Buscando paciente...");

    var myRequest = new XMLHttpRequest ();

    // Busca (GET) a lista numa API.
    myRequest.open ("GET", "https://api-pacientes.herokuapp.com/pacientes");

    // Carrega a lista (load).
    myRequest.addEventListener ("load", function () {

        // Resposta ao usuário, caso haja um erro na busca dos pacientes (erro no Ajax).
        var erroAjax = document.querySelector ('#erro-ajax');

        // Caso a resposta não seja '200', dá uma resposta ao usuário.
        if (myRequest.status == 200) {
            erroAjax.classList.add ("invisivel")

            var resposta = myRequest.responseText;
            var pacientes = JSON.parse (resposta);

            pacientes.forEach (function (paciente) {
                adicionaPacienteNaTabela (paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
            console.log (myRequest.status);
            console.log (myRequest.responseText);
        }
    });
    myRequest.send ();
});







// Dúvidas.

// O objeto 'XMLHttpRequest' é quem é responsável por fazer requisições HTTP assíncronas com Javascript.
// E para instanciar um novo Objeto XMLHttpRequest devemos utilizar a sintaxe com a palavrinha new ('var myRequest = new XMLHttpRequest();')
// É uma requisição assíncrona porque não está parando o fluxo do código, ou seja, no momento em que a requisição é feita, a execução continua normalmente. Durante esse processo de busca de pacientes no servidor externo, é possível excluir e adicionar pacientes.

// JSON.parse = vai transformar uma 'string' num objeto JS, JSON.