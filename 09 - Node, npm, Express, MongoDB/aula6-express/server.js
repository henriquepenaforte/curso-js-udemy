const express = require('express'); //importando a biblioteca express;
const app = express(); //carregando o express;

// operações de uma API que se pode fazer com express:
// CRUD -> Create, Read, Update, Delete     -> o que se "dá pra fazer" na internet
//         POST    GET   PUT     DELETE

//http://meusite.com/ <- GET (pedindo) <- entregue/acesse a página
//http://meusite.com/sobre <- GET (pedindo) <- entregue/acesse a página
//http://meusite.com/contato <- GET (pedindo) <- entregue/acesse a página

// o verbo get, no caso, o método de fábrica do node/express, conforme explicado acima, serve para ler ou acessar uma página. Esse método recebe 2 parametros, primeiro a rota, no caso a '/' para acessar as páginas e o segundo uma função que em si recebe dois parametros: requisição e resposta. A requisição nesse caso seria o GET (requisição do cliente) e a resposta seria a entrega para o cliente pelo servidor

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato')
})

app.listen(3000, () => {
    console.log('Acessando página http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});


