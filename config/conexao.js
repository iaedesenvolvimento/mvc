const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: "localhost",    // Servidor que hospeda o projeto
    user: "root",         // usuario de maior hierarquia para manipular o SGBD MySql Workbench
    password: "@ITB123456",   // Senha de acesso ao SGBD MySQL Workbench
    database: "db_mii2an",    // Nome do Schema (Banco de Dados) do SGBD MySQL Workbench
    port: "3306"              // Via de acesso de comunicacao entre a aplicacao (app) e SGBD MySQL Workbench
})

const conectarBanco = new Promise((resolve, reject) => {

    let deuCerto = true;   // let é um comando para criar variável que pode alterar valor durante a execução do script.

    if (deuCerto) {
        resolve("MySql conectado com sucesso!");
    } else {
        reject("Erro ao conectar no Banco de Dados MySql:");
    }

});

// Consumindo a Promise
conectarBanco
    .then((resultado) => {
        console.log(resultado);    // Escreve no terminal quando a promessa deu certo
    })
    .catch((erro) => {
        console.log(erro);         // Escreve no terminal quando a promessa deu errado 
    })

/*
    
conexao.connect((erro) => {
    if(erro) {
        console.log("Erro ao conectar no Banco de Dados MySql")
    } else {
        console.log("MySql conectado com sucesso")
    }
}) 
*/

module.exports = conexao