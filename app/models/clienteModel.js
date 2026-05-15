const conexao = require("../../config/conexao")

const Cliente = {
    /*
        Ja que a execução da aplicação do node.js e a execução do código SQL no MySQL Workbench, ocorrem simultaneamente, ou seja, são assíncronas, entõa é necessário ter o comando callback.
        callback diz para o mysql: "Insere os dados na tabela Clientes e me envia uma resposta dizendo se deu certo ou deu erro"
    */
    inserirCliente: (dados, callback) => {
        const sql = `
            INSERT INTO CLIENTES(NOME, CPF, SENHA, CONFIRMA_SENHA)
            VALUES(?, ?, ?, ?)
        `

        conexao.query(sql,
            [
                dados.nome,
                dados.cpf,
                dados.senha,
                dados.confirmar_senha
            ],
            callback
        )
    }
}

module.exports = Cliente