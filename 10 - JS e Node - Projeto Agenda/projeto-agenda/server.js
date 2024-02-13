//Invocando o dotenv, pacote que serve para evitar a exposição no corpo do código, de informações pessoais (senhas, emails, endereços, etc):
require('dotenv').config();


//Invocando o express após sua instalação no npm para uso do framework e seus recursos:
const express = require('express'); //importando a biblioteca express;
const app = express(); //carregando o express;


//Invocando e configurando o mongoose após sua instalação para conectar a aplicação com a base de dados já configurada do MongoDB:
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING) //esse CONNECTIONSTRING está presente no arquivo .env, retornando uma promise que o app já está pronto
    .then(() => {
        app.emit('pronto') //essa emissão é captada no final do arquivo
    })
    .catch(e => console.log(e));

const session = require('express-session'); //So isso já salva a sessao no navegador por meio dos cookies
const MongoStore = require('connect-mongo'); //Informa que as sessões serão salvas dentro da base de dados, já que por padrão, essas sessões são salvas na memória do servidor, podendo sobrecarregá-lo futuramente 
const flash = require('connect-flash'); //Essa configuração serve para mostrar mensagens rápidas autodestrutivas para o usuário, referente à sua interação com o site, como no caso em que ele erra uma senha ou não possui cadastro na base de dados. (dependem da sessão)


//Configuração das rotas de um site (homepage e afins), também são recursos do express. O arquivo routes.js importa as configurações dos controllers das páginas
const routes = require('./routes');
const path = require('path'); //facilita o trabalho com caminhos absolutos que servem de parâmetro para diversas funções e importações;


//Configurações de segurança:
const helmet = require('helmet'); //recomendação do express para segurança 
const csrf = require('csurf'); //cria tokens de segurança, que são basicamente id's únicos para cada acesso, que servem de validação para envio e leitura da página, evitando acessos indevidos de solicitações maliciosas, evitando que sites externos 'postem' ou modifique o site desenvolvido.

//Middlewares são cadeias de códigos que são executados antes ou depois de responder o cliente (como um middleware que verifica se o usuário está logado antes de acessar outra parte da página):
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware'); //importando os middlewares de outro arquivo
const { outroMiddleware } = require('./src/middlewares/middleware');

app.use(helmet());

//'Executando' as configurações invocadas anteriormente:
app.use(express.urlencoded({ extended: true })); //permite que formulários sejam postados dentro da aplicação
app.use(express.json()); //importam as informações de json para a aplicação
app.use(express.static(path.resolve(__dirname, 'public'))); //permite que a aplicação use e acesse recursos de arquivos estáticos públicos, como imagens, css's e etc

//configuração da sessão (local de salvamento, se o salvamento irá ser reescrito, tempo de duração de um cookie na base de dados e no dispositivo do usuário);
const sessionOptions = session({
    secret: 'asdasdahguikhuisdsa',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());


//Configuração dos views, nas quais são os arquivos que irão ser renderizados na tela (geralmente arquivos html)
app.set('views', './src/views') //passando o caminho relativo
// app.set('views', path.resolve(__dirname, 'src', 'views')); passando por caminho absoluto
app.set('view engine', 'ejs'); //configurando a engine de renderização, no caso, o pacote EJS instalado pelo npm;

//Executando as rotas configuradas:
app.use(csrf());
app.use(middlewareGlobal);
app.use(outroMiddleware);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);


app.on('pronto', () => { //quando a promise do mongoose é realizada, a aplicação passa a escutar a porta 3000 e assim, permitindo o acesso à pagina.
    app.listen(3000, () => {
        console.log('Acessando página http://localhost:3000')
        console.log('Servidor executando na porta 3000')
    });
});



