// controllers/clienteController.js
const clienteModel = require('../models/listarClienteModel');

class clienteController {
    listar(req,res) {
        clienteModel.listarClientes(function(erro, resultados){
            if(erro) {
                return res.send("Erro ao buscar clientes")
            }
            // Altere o seu res.render para testar se resolve:
res.render("lista_clientes", {
    clientes: Array.isArray(resultados) && Array.isArray(resultados[0]) ? resultados[0] : resultados
});

        })
    }
}

module.exports = new clienteController()
