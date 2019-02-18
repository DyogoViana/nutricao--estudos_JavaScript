// Remover pacientes.



// Selceciona todas as linhas com a classe 'paciente'. 'dblclick' = duplo clique.
// 'this.remove', é para retirar o dono do evendo, no caso o 'paciente'.
// event (click); target (o que foi clicado);
// Para selecionarmos o pai de um elemento, trabalharemos com a propriedade 'parentNode'.

var tabela = document.querySelector ("table");

tabela.addEventListener ("dblclick", function (event) {
    event.target.parentNode.classList.add ("fadeOut");

    setTimeout (function () {
        event.target.parentNode.remove ();
    }, 500); // 0.5 segundos.
});