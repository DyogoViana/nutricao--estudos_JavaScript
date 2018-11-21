// mudar título do h1.
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


// IMC = peso / altura * altura
var paciente = document.querySelector ("#primeiro-paciente");

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

if (peso <= 0 || peso >= 1000) {
    console.log ("Peso inválido!");
    pesoValido = false;
    tdImc.textContent = "Peso inválido!";
}

if (altura <=0 || altura >= 3.00) {
    console.log ("Altura inválida!");
    alturaValida = false;
    tdImc.textContent = "Altura inválida!";
}

if (alturaValida && pesoValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}

tdImc.textContent = imc;