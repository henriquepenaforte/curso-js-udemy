//Filter -> sempre retorna um array com a mesma quantidade de elementos ou menos.
//o filter aceita 3 parametros, mas geralmente só se usa o primeiro:
//arr.filter(function(valor, indice, array){})

//retorne os numeros maiores que 10:
const numeros = [5, 60, 80, 1, 2, 30, 11, 10, 999, 54, 5, 3];

/* const numFiltro = [];
function callbackFilter () {
    for(let i of numeros) {
        if (i > 10) {
            numFiltro.push(i)
        }
    }
} 
callbackFilter();
console.log(numFiltro)*/

const numerosFiltrados = numeros.filter(valor => valor > 10);

console.log(numerosFiltrados);

//retorne as pessoas que tem o nome com 5 letras ou mais:
const pessoas = ['Ana', 'Maria', 'Eduarda', 'Gael', 'Pio', 'Noronha'];
const pessoasFiltradas = pessoas.filter(letras => letras.length >= 5);
console.log(pessoasFiltradas);

//retorne pessoas com mais de 50 ano
//retorne pessoas cujo o nome termina com 'a':
const populacao = [
    {nome: 'Luiz', idade: 52},
    {nome: 'Ana', idade: 20},
    {nome: 'Armando', idade: 70},
    {nome: 'Bruna', idade: 13},
    {nome: 'Julia', idade: 30},
    {nome: 'Jão', idade: 83},
]

const maiores50 = populacao.filter(valor => valor.idade > 50);
console.log(maiores50);

const terminaA = populacao.filter(valor => valor.nome.endsWith('a'));
console.log(terminaA);