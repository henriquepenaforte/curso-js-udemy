// configurações padrão para iniciar um arquivo routes:
const express = require('express'); //inicializando o express
const route = express.Router(); //solicitando as configurações padrao para rotas do framework express

// Importando os controllers, que são basicamente o tratamento para cada subpágina que existir para uma URL:
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');
const sobreController = require('./src/controllers/sobreController');

// middleware
/* function meuMiddleware(req, res, next) {
    console.log();
    req.session = { nome: 'Xabs', sobrenome: 'Xablau' }
    console.log('Passei no middleware');
    console.log();
    next();
} */


// Rotas da home
/* route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res) {
    console.log()
    console.log('Ainda estou aqui...')
    console.log('Último middleware', `Olha o que tem na req.session.nome: ${req.session.nome}`)
});  */
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial)

// Rotas de sobre
route.get('/sobre', sobreController.paginaInicial)

module.exports = route;