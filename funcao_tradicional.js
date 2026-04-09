const readlineSync = require ('readline-sync')

var valor1 = readlineSync.question("Digite o primeiro valor : ")
var valor2 = readlineSync.question("Digite o segundo valor : ")

function soma(param_valor1, param_valor2){
    return parseInt(param_valor1) + parseInt(param_valor2)
}

console.log(valor1 + " + " + valor2 + " = " + soma(valor1, valor2))