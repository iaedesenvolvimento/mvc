// Lógica para validar o algoritmo do CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove pontos e traços
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
}

// Exporta as funções que a rota vai usar
exports.exibirPagina = (req, res) => {
    res.render('validaCPF', { resultado: null });
};

exports.processarValidacao = (req, res) => {
    const { cpf } = req.body;
    const ehValido = validarCPF(cpf);

    const resultado = {
        valido: ehValido,
        mensagem: ehValido ? "CPF Válido!" : "CPF Inválido ou Inexistente."
    };

    res.render('validaCPF', { resultado });
};
