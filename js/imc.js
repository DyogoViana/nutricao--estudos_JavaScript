// IMC = peso / altura * altura
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
    var imc = peso / (altura * altura); // calculo, 100 / 2 * 2 = 25

    // Validação das medidas.
    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 300) {
        console.log ("Peso inválido!");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add ("paciente-invalido")
    }

    if (altura <=0 || altura >= 3.00) {
        console.log ("Altura inválida!");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add ("paciente-invalido")
    }

    if (alturaValida && pesoValido) {
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