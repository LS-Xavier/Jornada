//funçaõ: determinar as rotas 

module.exports = app => {
    app.get("/atendimentos", (req, res)=> res.send('rota de atendimentos atualizado com nodemon'))

    app.post("/atendimento", (req, res) => {
        console.log(req.body)
        res.send("postando dados para o servidor")})
}
