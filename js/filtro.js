// Filtro.js

// Campo filtro
var campoFiltro = document.querySelector ("#filtrar-tabela");

campoFiltro.addEventListener ("input", function () {

    console.log (this.value);
    var pacientes = document.querySelectorAll (".paciente");

    if (this.value.length > 0) {

        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes [i];
            var tdNome = paciente.querySelector (".info-nome");
            var nome = tdNome.textContent;
            var expressao  = new RegExp (this.value, "i"); // Expressão Regular, ver em notes.md. 
            // "i" = case-insensitive. Tanto caixa alta ou baixa.

            if (!expressao.test (nome)) {
                paciente.classList.add ("invisivel");
            } else {
                paciente.classList.remove ("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes [i];
            paciente.classList.remove ("invisivel");
        }
    }
});




// Dúvidas

// A função 'addEventListener()' recebe dois parâmetros, o nome do evento a ser escutado e uma função com a ação que deve executar.

// 'Expressão Regular' == Nós poderemos passar dois parâmetros para o objeto, sendo o primeiro o texto que queremos buscar, no caso, o termo digitado no campo de busca (this.value), e o segundo parâmetro será referente às características dos termos que devem ser buscados. É importante que a busca não seja case sensitive, que é a diferenciação entre letras maiúsculas e minúsculas. Devem ser buscadas tanto letras maiúsculas como minúsculas, e passaremos a letra "i" como segundo parâmetro, para indicarmos a opção case insensitive.

// Porém, como utilizamos a expressão regular para buscar um texto específico na tabela? Em vez de compararmos com o nome inteiro do paciente (como estávamos fazendo), vamos pedir para a expressão regular verificar se um pedaço do nome do paciente possui as letras digitadas no campo de busca. Para isso, a expressão regular tem o método test()