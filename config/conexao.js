const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: "localhost",    // Servidor que hospeda o projeto
    user: "root",         // usuario de maior hierarquia para manipular o SGBD MySql Workbench
    password: "@ITB123456",   // Senha de acesso ao SGBD MySQL Workbench
    database: "db_mii2an",    // Nome do Schema (Banco de Dados) do SGBD MySQL Workbench
    port: "3306"              // Via de acesso de comunicacao entre a aplicacao (app) e SGBD MySQL Workbench
})

conexao.connect((erro) => {
    if(erro) {
        console.log("Erro ao conectar no Banco de Dados MySql")
    } else {
        console.log("MySql conectado com sucesso")
    }
}) 

module.exports = conexao