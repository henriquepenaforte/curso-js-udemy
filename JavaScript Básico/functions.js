//funções executam um conjunto de ações e retornam valores ou não quando são "chamadas"

function saudacao (nome) {
    console.log(`Oi né ${nome}`)
}

saudacao('Fabin'); //chamando a função
saudacao('Xabs');

function aloalo(nome){
    return (`Alô, alô ${nome}`)
}
const alo = aloalo('Fábio');
console.log(alo)

function soma (n1,n2) {
    const resultado = n1 + n2;
    return resultado
}

console.log(soma(2,3));
/* todas as variáveis e dados inseridos em uma função, então "seguros" de alterações externas às chaves da função
console.log(resultado); --> da erro */

//Outras forma de criar uma função:
//função anonima:
const raiz = function (n) {
    return n ** 0.5;
};
console.log(raiz(9));

//arrow function: (funções de uma linha só que podem ser simplificadas):
const raizes = x => x ** 0.5;
console.log(raizes(16));


//dica: evite criar funções com diversas finalidades. É melhor criar diversas funções separadas