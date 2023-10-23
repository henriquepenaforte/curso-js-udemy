function funcao() {
    console.log('oie')
}
funcao('valor'); // mesmo com o parametro q nao é utilizado, não ocorre erro;

//Também existe a variável arguments, que sustenta todos os valores passados por parametros quando a função nao possui uma e retorna um objeto com os valores passados:
//OBS: Arguments nao funciona com arrow function


function exemplo () {
    console.log(arguments);
    console.log(arguments[5]); // retorna o 5 indice
}
exemplo('valor', 1, 2, 3, 4, 'Fabio', 6); 

function funcaoEx (a,b,c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total)
    console.log(a,b,c)
}
funcaoEx(1,2,3,4,5)

// caso haja mais parametros na função do que na chamada:

funcaoEx(1,2); //retorna undefined para o argumento sem parametro

function soma (a,b) {
    console.log(a + b);
}

soma(2); //retorna NaN caso nao haja um valor padrao no parametro na função

function soma1 (a=0,b=0) {
    console.log(a+b)
}
soma1(2); //agora retorna somente 2 caso nao haja o outro parametro.

//Exemplo para desestruturação:
function FUNCAO ({nome, sobrenome, idade}) {
    console.log(nome,sobrenome,idade)
}
let obj = {
    nome : 'Carlos', 
    sobrenome: 'Tavares', 
    idade: 23,
};

FUNCAO(obj);

//Exemplo Array:
function exArray([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}
exArray(['Luiz Otavio', 'Miranda', 30])

function conta (operador, acumulador, ...numeros) { //rest (...) precisa ser o ultimo parametro, se tiver um parametro depois do rest, dá erro.
    for(let numero of numeros) {
        console.log(numero)
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador)
}

conta('*', 1, 20, 32, 25, 7)
conta('-', 0, 23,423,1,23)