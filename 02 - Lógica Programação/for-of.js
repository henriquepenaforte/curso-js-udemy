const nome = 'Luiz Otavio';
const pessoas = ['Fabio', 'Diego', 'Luana']

/* for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
} */

/* for (let i in nome) {
    console.log(nome[i]);
} */


//for of retorna os valores, enquanto o for in retorna os índices 
for (let valor of nome) {
    console.log(valor); 
}

for (let p of pessoas) {
    console.log(p);
}

//OBS: for of só funciona para elementos iteráveis (que pode retornar seus membros um de cada vez) ou seja, só funciona para arrays, não para objetos.

const pessoa = {
    nome: 'Julio',
    sobrenome: 'Oliveira',
}

for (let i in pessoa) {
    console.log(i, pessoa[i]); //funciona
}

for (let i of pessoa) {
    console.log(i); //não funciona. Typeerror: pessoa is not iterable
}

/* RESUMINDO:
    for clássico - Geralmente com iteráveis (array ou strings) - que possuam índices;
    for in - Retorna o índice ou chave (string, array ou objeto);
    for of - Retorna o valor em si (somente iteráveis - array ou string);
*/

