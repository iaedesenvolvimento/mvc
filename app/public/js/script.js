const pswConfirmaSenha = document.querySelector("#confirmasenha")
//pswConfirmaSenha representa a tag <input type="password"> cujo id é confirmasenha
pswConfirmaSenha.addEventListener("paste", function(e) {
    e.preventDefault()
})
// paste é o evento quando usuário tenhta colar dados no campo (caixa de texto).
//function(e) : Função que será execuata quando houver o evento.
// A letra (e) dentro do parênteses representa o evento que ocorreu, que neste caso é (o ato de colar).
//O método preventDefault() bloqueia a ação de colar.
 
 
 
 
function verificaConfirmaSenha() {
    let campoSenha = document.getElementById("senha")
    let valorSenha = campoSenha.value
 
    let campoConfirmaSenha = document.getElementById("confirmasenha")
    let valorConfirmaSenha = campoConfirmaSenha.value
 
    if (valorSenha == valorConfirmaSenha) {
        return true
    } else {
        document.getElementById("mensagem").innerHTML = "Confirma Senha está errado!";
        return false
    }
}