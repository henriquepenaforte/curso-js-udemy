//    indices    0,1,2,3,4,5,6,7,8
const numeros = [1,2,3,4,5,6,7,8,9];
const [primeiroNumero, segundoNumero] = numeros; //desta forma, estamos atribuindo duas variaveis com os dois primeiros índices do array;
console.log(primeiroNumero, segundoNumero);

//também dá para pegar o resto do array usando o operador "..." (rest);
const [primeiro, segundo, terceiro, ...resto] = numeros;

console.log(resto); // retorna o restante do array que não foram atribuidos por outras variaveis.

//também dá para "pular" os valores na atribuição via destruturação, basta colocar um espaço em branco nas virgulas:
const [um, , tres, , cinco] = numeros;
console.log(um, tres, cinco);

//arrays podem conter arrays:
//indices:          0        1        2
//                0,1,2    0,1,2    0,1,2
const NUMEROS = [[1,2,3], [4,5,6], [7,8,9]];

console.log(NUMEROS[1][2]); //retorna o 6

//agora atribuindo via desestruturação em arrays dentro de arrays (o que pode atrapalhar ao inves de ajudar)
//exemplo: pegando o 7 para uma variável:
const [[],[],[sete]] = NUMEROS;
console.log(sete);

//outra forma:
const [lista1, lista2, lista3] = NUMEROS; //separando os arrays
const [ ,oito] = lista3; //pegando o segundo valor do array separado
console.log(oito);




