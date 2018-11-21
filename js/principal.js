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

// IMC
var imc = peso / (altura * altura); // calculo, 100 / 2 * 2 = 25

console.log (imc);