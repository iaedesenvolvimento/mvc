const readlineSync = require ('readline-sync')

var valor1 = readlineSync.question("Digite o primeiro valor : ")
var valor2 = readlineSync.question("Digite o segundo valor : ")
var valor3 = readlineSync.question("Digite o sterceiro valor : ")

/* CRIAR A FUNÇAO ANONIMA */
const anonima = function(param_valor1, param_valor2, param_valor3){
    return parseInt(param_valor1) + parseInt(param_valor2) + parseInt(param_valor3)
}

console.log(valor1 + " + " + valor2 + " + " + valor3 + " = " + anonima(valor1, valor2, valor3))