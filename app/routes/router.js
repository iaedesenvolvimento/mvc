const express = require("express")
const rota = express.Router()
const cpfController = require('../controllers/cpfController');

const homeController = require("../controllers/homeController")
const cadClienteController = require("../controllers/cadClienteController")
const addClienteController = require("../controllers/addClienteController")
const confirmaSenhaController = require("../controllers/confirmaSenhaController") // Ajuste o caminho se necessário
const vamospfcController = require("../controllers/vamospfcController")


// Rota da página inicial
rota.get('/', homeController.index)

// Rota Cadastro de Cliente
rota.get('/cadastro', cadClienteController.formCadastroCliente)

// Rota para adicionar cliente (POST)
rota.post('/add_cliente', addClienteController.validateUser, addClienteController.registerUser)  // define a rota POST para adicionar cliente, utilizando as validações definidas no addClienteController
// rota.post('/add_cliente', addClienteController.validateUser, addClienteController.addCadastroController)  // define a rota POST para adicionar cliente, utilizando as validações definidas no addClienteController

// Rota Formulario Senha e confirma senha (POST)
rota.get('/confirma', confirmaSenhaController.confirmaSenhaCliente)

rota.post('/vamospfc', vamospfcController.vamospfcAgradece)

// --- CORREÇÃO AQUI: Use 'rota', não 'router' ---
rota.get('/validarCPF', cpfController.exibirPagina);
rota.post('/validarCPF', cpfController.processarValidacao);

module.exports = rota
