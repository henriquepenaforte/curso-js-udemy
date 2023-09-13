//arrays servem para guardar na memória vários dados dentro de uma só variável. Funcionam como um object

const alunos = ['Joao','Maria','Jão']; /*boa prática de programação é colocar somente elementos de mesma natureza dentro de um array, ou seja, só strings, só numbers, so objects, etc, */

//Strings são indexadas por elemento:
//              0   1   2   3
const nomes = ['a','b','c','d'];
console.log(nomes[1]); //retorna 'b'
console.log(nomes); //retorna o array completo

//também dá para substituir os elementos pelos índices
alunos[2] = 'Fábio'
console.log(alunos); //retorna [ 'Joao', 'Maria', 'Fábio' ]
//ou criar um elemento, caso não tenha o índice indicado:
alunos[3] = 'Maria2'
console.log(alunos);
//Um melhor jeito de adicionar um elemento no final de um array é usando o length:
nomes[nomes.length] = 'e';
console.log(nomes); //retorna [ 'a', 'b', 'c', 'd', 'e' ]

//Algumas funções com array:
console.log(nomes.length); //retorna 4
nomes.push('f'); //adiciona o elemento informado no final do array
console.log(nomes); //retorna [ 'a', 'b', 'c', 'd', 'e', 'f']

nomes.unshift('z'); //adiciona o elemento no início do array(índice 0)
console.log(nomes); //retorna [ 'z', 'a', 'b', 'c', 'd', 'e', 'f']

nomes.pop(); //apaga o último elemento do array;
const removido = nomes.pop() //dá para guardar o elemento que seria apagado para uma variável;
console.log(nomes); //retorna [ 'z', 'a', 'b', 'c', 'd' ]
const remov = nomes.shift() //apaga o primeiro elemento, nesse caso, declarando em uma variável
console.log(remov); //retorna 'z'

const exemplo = ['fabin', 'lulu', 'juvenal', 'garibaldo']
delete exemplo[2]; /*apaga um elemento no índice informado mas não altera os índices do array, ou seja, ele substitui o elemento do índice informado por um elemento undefined */
console.log(exemplo); //retorna [ 'fabin', 'lulu', <1 empty item>, 'garibaldo' ]

console.log(exemplo[40]); //retorna undefined pois o índice não existe

console.log(exemplo.slice(0,2)); //retorna parte do array assim como nas strings

console.log(typeof exemplo); //retorna object
console.log(exemplo instanceof Array); //retorna true, ou seja, é um array 