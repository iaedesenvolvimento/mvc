const conexao = require("../../config/conexao")

class listarClientes {
    listarClientes(callback) {
        const sql = `SELECT * FROM CLIENTES WHERE ID_CLIENTE IN (1,3)`

        conexao.query(sql,callback)

    }
}

module.exports = new listarClientes()