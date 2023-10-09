const frutas = ['pera', 'uva', 'macã'];

// modo clássico:
/*
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
} */

//pelo for in (lê os índices ou chaves do objeto)

for (let indice in frutas) {
    console.log(frutas[indice]);
}

const pessoa = {
    nome: 'Fabio',
    sobrenome: 'Otávio',
    idade: 30,
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}