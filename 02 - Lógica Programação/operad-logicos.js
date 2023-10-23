/*
    OPERADORES LÓGICOS
    && -> AND -> E
    || -> OR -> OU
    ! -> NOT -> NÃO

*/

const usuario = 'Chico';
const senha = 12345;

const vaiLogar = usuario === 'Chico' && senha === 12345;
console.log(vaiLogar); //retorna true

console.log(!false); //retorna true;
console.log(!true); //retorna false;