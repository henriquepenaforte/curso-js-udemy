//retorne a soma do dobro de todos os pares;
//  -> filtrar pares
//  -> dobrar valores
//  -> reduzir (somar tudo)

const numeros = [5, 60, 80, 1, 2, 30, 11, 10, 999, 54, 5, 3];

const novoNum = [...numeros]; //evitando mudar o array original
const pares = novoNum.filter(valor => valor % 2 === 0);
const dobro = pares.map(valor => valor * 2);
const soma = dobro.reduce((acumulador, valor) => acumulador += valor)

console.log(soma);
console.log(numeros);