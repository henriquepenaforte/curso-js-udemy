const express = require('express'); //importando a biblioteca express;
const app = express(); //carregando o express;
const routes = require('./routes');

app.use(express.urlencoded({ extended: true })); 
app.use(routes);



app.listen(3000, () => {
    console.log('Acessando página http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});


