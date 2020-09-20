//função: subir o servidor 

const customExpress = require("./Config/customExpress")
const conexao = require("./Infraestrutura/conexao")

conexao.connect((erro) => {
    if(erro){
        console.log(erro)
    }else{
        console.log("conectado!")

        const app = customExpress()
        app.listen(3000, () => console.log("servidor rodando!"))
        }
})





// Aprendendo REST API - 

/*
1. Instalando express ( npm install express)
2. Instalando nodemon ( npm install --save-dev nodemon)
3. Add script ( start: nodemon index.js ) no package.json 
3. Criação de rotas com express
4. Inicializando servidor com nodemon 
5- separando os arquivos da API ( module.export () =>{})
6- instalar o consign - agrupa as rotas -( npm install consign)
7- baixar o Postman para vizualizar as requisições POST 
8- instalar o Body-parser 
9- baixar o mysql(banco de dados)
10- conectar nosso servidor a um banco de dados (arquivo Infraestrutura/conexao)
*/ 



//OBS: comentários utilizados apenas para fins de aprendizagem. 