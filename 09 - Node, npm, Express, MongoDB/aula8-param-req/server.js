const express = require('express'); //importando a biblioteca express;
const app = express(); //carregando o express;



app.get('/', (req, res) => {
    res.send(`<form action="/" method="post">
    <label for='name'>Nome Comp Cliente:</label>
    <input type='text' id='name'></input>
    <button>Enviar Formulário</button>
    </form>`);
});

app.get('/testes/:idUsuarios?', (req, res) => {
    console.log(req.params)
    res.send(req.params.idUsuarios)
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato')
})

app.post('/', (req, res) => {
    res.send('recebi o formulário')
})

app.listen(3000, () => {
    console.log('Acessando página http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});


