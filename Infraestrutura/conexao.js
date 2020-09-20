//função: conectar o servidor ao banco de dados 
const mysql = require("mysql")

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3307, 
    user: "root",
    password: "062824" , 
    database: "primeira-conexao"
})

module.exports = conexao; 