let num1 = 10.342352523235
let num2 = 2.5

console.log(num1.toString() + num2); //função toString, transforma em string. Entao o "+" vai concatenar

console.log(num1.toFixed(2)); /*funçao toFixed() define as casas decimais. Atenção em usar essa função dentro da variável, pois a mudança transforma o número, podendo gerar imprecisão em cálculos. Recomendável usar apenas para mostrar ao usuário */

console.log(Number.isInteger(num1)); //esse método retorna true ou false para numeros inteiros

let temp = num1 * 'xabs'; //não tem como multiplicar um number e uma string
console.log(Number.isNaN(temp)); //retorna true ou false para not a number

let numero1 = 0.7;
let numero2 = 0.1;

console.log(numero1 + numero2); //imprecisão do js. Retorna 0.799999999999999999...
let resultado = numero1 + (numero2 * 3); //calculos com os numeros, corrigem essa imprecisão.
console.log(resultado)
console.log(Number.isInteger(resultado)); //retorna true