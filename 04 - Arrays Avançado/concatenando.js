const num1 = [1,2,3];
const num2 = [4,5,6];

const numeros = num1 + num2 //isso nao serve para concatenar como era feito com as strings, pois só junta os valores dentro de uma:
console.log(numeros); //1,2,34,5,6

const num3 = num1.concat(num2);
console.log(num3); //[ 1, 2, 3, 4, 5, 6 ]

//também é possivel concatenar acrescentando outros valores:
const num4 = [7,8,9,10]
const num5 = num3.concat(num4, [11,12,13,14], 'Fabio');
console.log(num5);

//com o rest (...) => spread
const num6 = [15,16,17,18];
const num7 = [...num5, ...[19,20], 'Luiz', ...num6, ...[21,22]];
console.log(num7);