/* 
    OPERADORES DE COMPARAÇÃO
    >   maior que
    <   menor que
    >=  maior ou igual a
    <=  menor ou igual a
    ==  igualdade valor (evitar usar)
    === igualdade restrita (valor e tipo)
    !=  diferença valor (evitar usar)
    !== diferença restrita (valor e tipo)

    Operadores de comparação retorna valores booleanos - true or false
*/

const comp = 10 >= 9;
console.log(comp); //retorna true

let num1 = 20;
let num2 = 22;
console.log(num1 >= num2); //retorna false

let num3 = 10;
let num4 = '10';
console.log(num3 == num4); //retorna true mesmo com tipos de dados diferentes
// o js automaticamente converte valores que normalmente seriam numbers que são strings
// para contas, é sempre melhor trabalhar com valores do mesmo tipo;
console.log(num3 === num4) //retorna false pois de fato os dados sao diferentes
console.log(num3 !== num4) //retorna true pela mesma lógica

