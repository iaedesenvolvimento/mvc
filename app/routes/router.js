const express = require("express")
const rota = express.Router()

// CORREÇÃO: Importando da pasta 'controlles' (conforme sua imagem)
const homeController = require("../controllers/homeController")
const cadClienteController = require("../controllers/cadClienteController")
const addClienteController = require("../controllers/addClienteController")


// Rota da página inicial
rota.get('/', homeController.index)

// Rota Cadastro de Cliente
rota.get('/cadastro', cadClienteController.formCadastroCliente)

// Mude de .get para .post
rota.post('/add_cliente', addClienteController.addCadastroController)

module.exports = rota


