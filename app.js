/*
    express é um modulo NPM (Node Package Manager), traduzindo, gerenciador de pacotes NODE JS.
    Dentra de cada modulo que um arquivo (arquivo), há uma colecao de objetos e funções prontas para serem utilizadas.
    Express é o principal modulo NPM, Ou seja, quando instalado ele cria uma pasta com varios outros modulos.
    Essa pasta é denominada node_modules.

    A funcao require diz para o servidor web que este arquivo poderá utilizar todos os objetos e funcoes de um determinado modulo.
 */
const express = require("express")

const rota = require("./app/routes/router")

// Criar a variavel (que é uma constante) de aplicacao do projeto

const aplicacao = express()

// Acesso aos arquivos CSS e imagens
aplicacao.use(express.static("./app/public"))

// view engine ( Especie de um navegador do back end) é o interpretador de páginas e (EJS) => HTML do lado Servidor, ou seja, é um html do back end.
aplicacao.set("view engine", "ejs") // o aplicativo está definindo que o view engine interpretará o template (modelo) ejs   

// view é a pasta que coném arquivos ejs
aplicacao.set("views", "./app/views")

/*
    JSON analisa os dados do formulário que ficam no corpo da solicitação (método POST), 
    tambem denominado request de entrada para ser enviado para o Servidor Web
*/
aplicacao.use(express.json())

// A linha de comando abaixo é utilizado para ler os dados do formulário
// Extended true : Siginifica que a funcao urlencoded conseguiu decifrar, ou seja, entender os dados do formulário
aplicacao.use(express.urlencoded({ extended: true}))


// via de acesso para comunicacao entre cliente (navegador) e o servidor web (nodeJS)

const viaConexao = 3000

aplicacao.use("/", rota)

// Funcao que executa o servidor web que fica na escuta uma provavel solicitacao de recursos por parte do navegador

aplicacao.listen(viaConexao, () => {
    console.log("Servidor rodando e escutando na porta " + viaConexao)
})