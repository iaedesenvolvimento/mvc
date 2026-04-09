var data = new Date()

dia = data.getDate()
mes = data.getMonth()
ano = data.getFullYear()
hora = data.getHours()
minuto = data.getMinutes()
segundos = data.getSeconds()
switch(mes){
    case 0 :
        strMes = "Janeiro"
    break

    case 1 :
        strMes = "Fevereiro"
    break

    case 2 :
        strMes = "Março"
    break

    case 3 :
        strMes = "Abril"
    break

    case 4 :
        strMes = "Maio"
    break

    case 5 :
        strMes = "Junho"
    break

    case 6 :
        strMes = "Julho"
    break

    case 7 :
        strMes = "Agosto"
    break

    case 8 :
        strMes = "Setembro"
    break

    case 9 :
        strMes = "Outubro"
    break

    case 10 :
        strMes = "Novembro"
    break

    case 11 :
        strMes = "Dezembro"
    
}

console.log("Barueri, " + dia + " de " + strMes + " de " + ano + " as " + hora + " : " + minuto + " : " + segundos)