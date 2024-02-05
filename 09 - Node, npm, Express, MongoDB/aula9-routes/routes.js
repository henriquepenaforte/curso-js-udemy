// configurações padrão para iniciar um arquivo routes:
const express = require('express'); //inicializando o express
const route = express.Router(); //solicitando as configurações padrao para rotas do framework express

// Importando os controllers, que são basicamente o tratamento para cada subpágina que existir para uma URL:
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');
const sobreController = require('./controllers/sobreController');

// Rotas da home
route.get('/', homeController.paginaInicial); 
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial)

// Rotas de sobre
route.get('/sobre', sobreController.paginaInicial)

module.exports = route;