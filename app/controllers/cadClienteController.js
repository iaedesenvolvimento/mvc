exports.formCadastroCliente = (req, res) => {
    res.render("cadastro_cliente", { 
        errors: [],        // Agora errors SEMPRE existe
        dadoDigitado: {} 
    });
};
