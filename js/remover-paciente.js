// Remover pacientes.



// Selceciona todas as linhas com a classe 'paciente'. 'dblclick' = duplo clique.
// 'this.remove', é para retirar o dono do evendo, no caso o 'paciente'.
// event (click); target (o que foi clicado);
// Para selecionarmos o pai de um elemento, trabalharemos com a propriedade 'parentNode'. Perguntamos primeiro qual das <td> (filho; 'event.target') foi clicado e depois usamos o 'parentNode' parae buscar o pai (<tr>) e remover.

// setTimeout com o tempo de 0.5 segundos, faz esperar por esse periodo a execução da função de 'remove'.

var tabela = document.querySelector ("table");

tabela.addEventListener ("dblclick", function (event) {
    event.target.parentNode.classList.add ("fadeOut");

    setTimeout (function () {
        event.target.parentNode.remove ();
    }, 500); // 0.5 segundos.
});