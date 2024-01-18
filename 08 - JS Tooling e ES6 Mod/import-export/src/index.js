import falaAlgo, {nome2, sobrenome2, idade2, soma } from './modulo1.js';

/* import {nome as nome2, sobrenome as sobrenome2, idade as idade2, soma } from './modulo1.js'; //da para importar as variaveis mudando os identificadores */

const nome = 'Fabio';

console.log(nome);
console.log(nome2);
console.log(soma(2,3));

//importando dos materiais exportados diretamente
import { diferenca } from './modulo1.js';
console.log(diferenca(2,3))
import { Pessoa } from './modulo1.js';
const p1 = new Pessoa('Luis', 'Claudio');
console.log(p1.nome);

//importando todo o conteúdo (que tiver exportado) de outro módulo:
import * as OutroModulo from './modulo2.js';
OutroModulo.falaOi();

//importando conteúdo default
import qualquerNome from './modulo1.js';
falaAlgo();