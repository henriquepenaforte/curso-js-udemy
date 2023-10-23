//String sao indexadas. Ou seja, cada caractere tem uma numeração partindo do zero
//               01234567
let umaString = "Um texto";
console.log(umaString[4]); //retorna o "e"

console.log(umaString.indexOf('texto')); /*retorna o índice na qual o texto procurado entre parenteses se inicia */
console.log(umaString.indexOf('xablau')); /*quando o texto ou o número nao existe na variável ou no array, a função indexOf retorna -1 */
console.log(umaString.lastIndexOf('texto'))/*funciona da mesma forma do indexOf mas começando de trás para frente. */
console.log(umaString.replace(/Um/,'O')) // substitui a expressao por outra

let outraString = ('Esta é uma string mais extensa');
console.log(outraString.replace(/s/g, 'x')); /*adicionando a flag g, a expressao regular replace, substitui todo caractere ou texto que encontrar */
console.log(outraString.length); //mostra o comprimento da string

console.log(outraString.slice(5,30)) /*corta a string de acordo com os indices selecionados, inclusive aceita indices negativos para começar de trás para frente. */
console.log(outraString.split(' ')); /*retorna um array com a string cortada de acordo com o texto selecionado */
console.log(outraString.toUpperCase()); //deixa tudo em maiusculo

console.log(outraString.toLowerCase()); //deixa tudo em minusculo