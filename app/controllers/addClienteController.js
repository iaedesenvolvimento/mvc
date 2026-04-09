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