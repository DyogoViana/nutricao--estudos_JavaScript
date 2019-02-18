// Remover pacientes.

// Selceciona todas as linhas com a classe 'paciente'. 'dblclick' = duplo clique.
// 'this.remove', é para retirar o dono do evendo, no caso o 'paciente'.
var pacientes = document.querySelectorAll (".paciente");

pacientes.forEach (function (paciente) {
    paciente.addEventListener ("dblclick", function () {
        this.remove ();
    })
})
