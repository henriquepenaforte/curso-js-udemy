//return retorna um valor e termina uma função

function soma (a,b) {
    return a + b
}
soma(2,4)


//existem funções que não precisam retornar um valor

function soma2(a,b) {
    console.log(a+b)
}
soma2(3,5)

//funções que retornam objetos:

function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome }
}

const p1 = criaPessoa('Luis', 'Claudio');
console.log(p1.nome);

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto
    }
    return falaResto; //aqui está retornando a função em si e nao o que ela de fato faz
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo); //retorna: [function: falaResto]
console.log(olaMundo('mundo!')); //retorna o que a função faz

//Outros exemplos:
/*
function duplica(n) {
    return n * 2
}

function triplica(n) {
    return n * 3
}

function quadriplica(n) {
    return n * 4
}
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
*/

function criaMultiplicador(multiplicador) {
    //multiplicador
    return function(n) {
        return n * multiplicador
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));