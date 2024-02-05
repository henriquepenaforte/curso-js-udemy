const express = require('express'); //importando a biblioteca express;
const app = express(); //carregando o express;

app.use(
    express.urlencoded({ extended: true })
); 

app.get('/', (req, res) => {
    res.send(`<form action="/" method="POST">
    <label for='name'>Nome Comp Cliente:</label>
    <input type='text' id='name' name='nome'></input>
    <label for='outronome'>Outra coisa:</label>
    <input type='text' id='outronome' name='outrocampo'></input>  
    <button>Enviar Formulário</button>
    </form>`);
}); //o 'name' do input serve justamente para identificar a chave do objeto body presente na página, podendo acessá-la e usá-la.

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.query.facebookprofile)
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que voce me enviou foi: ${req.body.nome} e ${req.body.outrocampo}`)
})

app.listen(3000, () => {
    console.log('Acessando página http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});


