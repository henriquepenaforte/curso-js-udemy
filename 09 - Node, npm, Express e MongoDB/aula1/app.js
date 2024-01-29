//OBS: Os 'console.log' do outro arquivo (modulo) também aparecem no console do arquivo que está importando recursos do modulo em questão.

const mod1 = require('./mod1'); //nesse caso, estamos importando tudo

const falaNomeNovo = require('./mod1').falaNome //nesse caso estamos importando somente uma coisa;

const nomeNovo = mod1.nome; //outro modo de pegar apenas uma coisa
console.log(nomeNovo);

const { peso, idade } = require('./mod1'); //desestruturação
console.log(peso, idade);


mod1.falaNome();
falaNomeNovo();

console.log(mod1.qualquerCoisa)

const { Carro } = require('./mod1');
const gol = new Carro('volkswagen', 'preto');
console.log(gol);