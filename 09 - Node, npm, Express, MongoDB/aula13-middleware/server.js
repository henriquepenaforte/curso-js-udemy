const express = require('express'); //importando a biblioteca express;
const app = express(); //carregando o express;
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');
const { outroMiddleware } = require('./src/middlewares/middleware');


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public'))); 
app.use(middlewareGlobal)
app.use(outroMiddleware);


// app.set('views', path.resolve(__dirname, 'src', 'views')); podendo passar o caminho absoluto por path, ou:
app.set('views', './src/views') //passando o caminho relativo
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
    console.log('Acessando página http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});


