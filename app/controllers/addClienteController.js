const { body, validationResult } = require("express-validator")
const Cliente = require("../models/clienteModel")

// Validacoes
exports.validateUser = [
    body("nome").notEmpty().withMessage("O nome é obrigatório")
        .isLength({ min: 5 }).withMessage("O nome deve conter pelo menos 5 caracteres"),
    body("cpf").notEmpty().withMessage("O CPF é obrigatório")
        .isLength({ min: 11, max: 11 }).withMessage("O CPF deve conter pelo menos 11 digitos")
        .isNumeric().withMessage("O CPF deve conter apenas digitos"),
    body("senha").notEmpty().withMessage("A senha é obrigatória")
        .isLength({ min: 6 }).withMessage("A senha deve conter pelo menos 6 caracteres"),
    body("confirmasenha")
        .custom((value, { req }) => {
            if (value !== req.body.senha) {
                throw new Error("As senhas não coincidem");
            }
            return true;
        })
];

// Processar Cadastro
exports.registerUser = (req, res) => {
    const errors = validationResult(req);   // errors é um vetor de possiveis erros
    if (!errors.isEmpty()) {   // se houver erro(s)
        return res.render("cadastro_cliente", {
            errors: errors.array(),
            dadoDigitado: req.body
        })
    } else {    // Não tem erro de dados do formulário, ou seja, rodou liso
        const dados = {
            nome: req.body.nome,
            cpf: req.body.cpf,
            senha: req.body.senha,
            confirmar_senha: req.body.confirmasenha
        }

        Cliente.inserirCliente(dados, (erro, resultado) => {
            if (erro) {
                console.log(erro)
                return res.status(500).send("Erro ao inserir dados")
            }
            return res.render('home')
        })
    }
};

/*
exports.addCadastroController = (req, res) => {
    console.log("Dados enviados com sucesso!")

    // JSON tem por finalidade obter dados do formulário que são atribuidos as variáveis
    var nome_cliente = req.body.nome
    var cpf_cliente = req.body.cpf
    var senha_cliente = req.body.senha
    var confirmasenha_cliente = req.body.confirmasenha 

    // cada parametro recebe o valor de cada variavel acima 
    res.render("dados_formulario", {"nome_cliente": nome_cliente, "cpf_cliente": cpf_cliente, "senha_cliente": senha_cliente, "confirmasenha_cliente": confirmasenha_cliente })
    }
*/
