const readlineSync = require ('readline-sync')

var valor1 = parseInt(readlineSync.question("Digite o primeiro valor : "))
var valor2 = parseInt(readlineSync.question("Digite o segundo valor : "))
var resultado = 0
var operador
var opcao

opcao = parseInt(readlineSync.question(" Escolha uma das Opcoes : [1- Soma] [2- Subtrai] [3- Multiplica] [4- Divide] : "))

if(opcao == 1) {
    resultado = valor1 + valor2
    operador = "+"
} else if (opcao == 2) {
    resultado = valor1 - valor2
    operador = "-"
} else if (opcao == 3) {
    resultado = valor1 * valor2
    operador = "*"
} else {
    resultado = valor1 / valor2
    operador = "/"
}

if(valor2 == 0 && opcao == 4) {
    console.log("Não pode dividir por zero. Aí força a amizade!")
} else if (opcao >=1 && opcao <= 4) {
    console.log(valor1 + operador + valor2 + " = " + resultado)
} else {
    console.log("Você é mó comédia!")
}