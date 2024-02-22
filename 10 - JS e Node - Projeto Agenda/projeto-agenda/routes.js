//O arquivo routes.js decide qual controller irá controlar determinada rota. Nesse template, existem 3 controllers para páginas do site (/ - homepage, /contatos e /sobre), além de uma rota para tratamento do POST, ou seja, do envio do formulário.

// configurações padrão para iniciar um arquivo routes:
const express = require('express'); //inicializando o express
const route = express.Router(); //solicitando as configurações padrao para rotas do framework express

// Importando os controllers, que são basicamente o tratamento para cada subpágina que existir para uma URL:
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

const { loginRequired } = require('./src/middlewares/middleware')

route.get('/', homeController.index); //poderia ser '/index', mas só a barra já reconhece a página inicial (index);;

// Rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

// Rotas de contato
route.get('/contato/index', loginRequired, contatoController.index);
route.post('/contato/register', loginRequired, contatoController.register);
route.get('/contato/index/:id', loginRequired, contatoController.editIndex);
route.post('/contato/edit/:id', loginRequired, contatoController.edit);

module.exports = route;