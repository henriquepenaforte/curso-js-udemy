require('dotenv').config();

const express = require('express'); //importando a biblioteca express;
const app = express(); //carregando o express;
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto')
    })
    .catch(e => console.log(e));

const session = require('express-session'); //so isso já salva a sessao no navegador
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');


const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');
const { outroMiddleware } = require('./src/middlewares/middleware');


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public'))); 
app.use(middlewareGlobal)
app.use(outroMiddleware);

const sessionOptions = session({
    secret: 'asdasdahguikhuisdsa',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());


// app.set('views', path.resolve(__dirname, 'src', 'views')); podendo passar o caminho absoluto por path, ou:
app.set('views', './src/views') //passando o caminho relativo
app.set('view engine', 'ejs');

app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessando página http://localhost:3000')
        console.log('Servidor executando na porta 3000')
    });
});



