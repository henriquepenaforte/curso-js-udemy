const multiplicacao = require('./mod1'); //importando um default (podendo declarar com qualquer nome desejado)

console.log(multiplicacao(2,3));


const ClassCachorro = require('../aula 2/B/C/D/mod2'); //importando dentro de várias pastas

const caramelo = new ClassCachorro('caramelo', 'SRD', 'laranja');

console.log(caramelo.nome);



const importadoMod4queImportouDoMod3 = require('./Z/mod4')
console.log(importadoMod4queImportouDoMod3)

//toda vez que é necessário acessar uma pasta mais interna, utiliza-se um ponto para 'avançar' nos diretórios. Se é necessário acessar uma pasta mais externa, utiliza-se dois pontos para 'voltar' nos diretórios;
//modo fácil de se verificar o nome do arquivo e do diretório onde se encontra:
console.log(__filename);
console.log(__dirname);

const path = require('path'); //percebe-se que 'path' já é um modulo presente no node de fábrica;


