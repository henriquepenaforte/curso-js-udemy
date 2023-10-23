/*
&& -> todas as expressoes precisam ser verdadeiras para retornar true / false && true -> false
|| -> ao menos uma expressao precisa ser verdadeira para retornar true / false || true -> true
*/

console.log('Robson' && 0 && 'Marcia'); //retorna 0. A partir do momento em que o js encontra o um valor literal de outro tipo não booleano que avaliam false (falsy values), a expressão retornará o proprio valor e não irá continuar no restante da comparação;

/*
    VALORES FALSY (tipos de valores que apontam false dentro de uma expressão lógica):
    false
    0
    ' ', " ", ` ` (strings vazias)
    null/undefined
    NaN
*/


console.log('Luiz' && 'Maria'); //retorna Maria
console.log('Luiz' && null && 'Maria'); //retorna null
console.log('Luiz' && 'Maria' && 10 && 'Fabio' && 0 && 'Joao'); //retorna 0

//Portanto, a partir do momento que o JS percebe um valor falsy dentro da expressão, ele já retorna esse valor antes de completá-la, ou seja, fazendo um curto circuito

function oi () {
    return 'oi';
}

let vaiExecutar = false;

console.log(vaiExecutar && oi()); // retorna false

vaiExecutar = "Fábio"; //string não vazia = true
console.log(vaiExecutar && oi()); // retorna a função

console.log(0 || false || null || 'Luiz' || true); //retorna Luiz. Como isso é uma string verdadeira, em expressoes com ou, o js retorna o primeiro valor true ou equivalente