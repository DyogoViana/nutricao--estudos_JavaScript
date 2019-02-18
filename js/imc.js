// imc.js

var pacientes = document.querySelectorAll (".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    // Peso
    var tdPeso = paciente.querySelector (".info-peso");
    var peso = tdPeso.textContent;

    // Altura
    var tdAltura = paciente.querySelector (".info-altura");
    var altura =  tdAltura.textContent;

    // Selecionando a coluna do IMC
    var tdImc = paciente.querySelector (".info-imc");
    // var imc = peso / (altura * altura);

    // Validação das medidas.
    var pesoValido = validaPeso (peso); // True or False.
    var alturaValida = validaAltura (altura);

    if (!pesoValido) {
        console.log ("Peso inválido!");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add ("paciente-invalido")
    }

    if (!alturaValida) {
        console.log ("Altura inválida!");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add ("paciente-invalido")
    }

    if (pesoValido && alturaValida) {
        var imc = calculaImc (peso, altura);
        tdImc.textContent = imc;
    }
}

// Função para calcular o IMC.
function calculaImc (peso, altura) {
    
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}


// Validações na tabela: 

// Validação do peso na tabela.
function validaPeso (peso) {
    
    if (peso >=0 && peso <= 300) {
        return true;
    } else {
        return false;
    }
}

// Validação da altura na tabela.
function validaAltura (altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}