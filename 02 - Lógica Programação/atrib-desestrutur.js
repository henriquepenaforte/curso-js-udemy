let a = 'A';
let b = 'B';
let c = 'C';

[a, b, c] = [1, 2, 3] //da para atribuir novos valores à variaveis declaradas desta forma (desestruturação) por array.
console.log(a,b,c);

const numeros = [4, 5, 6];
[a,b,c] = numeros; //também da para atribuir por desestruturação usando um array de uma outra variavel declarada.
console.log(a,b,c)

const letras = ['B', 'C', 'A'];
[a, b, c] = letras;
console.log(a,b,c);