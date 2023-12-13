//Reduce -> retorna um valor unico a partir de um array
//parametros de reduce -> reduce(function(acumulador, valor, indice, array){},valor inicial)
//da para fazer filter e map pelo proprio reduce, mas não é recomendável

const numeros = [5, 60, 80, 1, 2, 30, 11, 10, 999, 54, 5, 3];

//Some todos os números (reduce);
const total = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador
},0 /*valor Inicial (opcional mas importante para nao alterar contas)*/)
console.log(total);

//Retorne um array com os pares (filter)
const pares = numeros.filter(valor => valor % 2 == 0);
console.log(pares);

//Retorne um array com o dobro dos valores (map):
const dobro = numeros.map(valor => valor*2);
console.log(dobro);


//retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 52},
    {nome: 'Ana', idade: 20},
    {nome: 'Armando', idade: 70},
    {nome: 'Bruna', idade: 13},
    {nome: 'Julia', idade: 30},
    {nome: 'Jão', idade: 83},
    {nome: 'Rosana', idade: 68}
]

const maisVelha = pessoas.reduce(function (acum, valor) {
    if (acum.idade > valor.idade) return acum;
    return valor;
}/*nesse caso nao precis do valor inicial pois queremos justamente pegar a partir do primeiro valor */)

console.log(maisVelha);