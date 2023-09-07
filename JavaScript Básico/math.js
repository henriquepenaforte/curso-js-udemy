// Objeto Math são scripts pré-programados/objetos para tratamento de numbers dentro do js.

let num1 = 9.878738;
let num2 = Math.floor(num1); //Math.floor arredonda o número para baixo

console.log(num2); //retorna 9

console.log(Math.ceil(num1)) //Math.ceil arredonda para cima //aredonda para 10.

let num3 = Math.round(num1); /*Math.round arredonda automáticamente => .5 arredonda para cima, .499999... em diante, arredonda para baixo. */
console.log(num3); // retorna 10

console.log(Math.max(1,2,3333,423232321132,200, -50)); // retorna o maior numero da sequencia
console.log(Math.min(1,2,3333,423232321132,200, -50)); // retorna o menor numero da sequencia
console.log(Math.random()); //gera um número aleatório entre 0 e 1 (nunca sendo nenhum dos dois)

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); /* exemplo para criar um número arredondado entre 10 e 5 */
console.log(aleatorio);

console.log(Math.pi()) //retorna pi
console.log(Math.pow(2,10)) //retorna 2 elevado a 10
console.log