//Funcao que recebe 2 numeros e retorne o maior deles

function maior (n1 = 0,n2 = 0) {
    if (n1 > n2) {
        return n1
    } else if (n1 < n2) {
        return n2
    } else if (n1 === n2) {
        return 'Os números são iguais'
    } else {
        return 'Valor(es) inválidos'
    }
} 

console.log(maior(3,8));

//ou ainda, otimizando a função e simplificando:

function max (x,y) {
    return x > y ? x : y;
}

console.log(max(4,3))

//ou ainda, usando arrow function;

const max2 = (x,y) => x > y ? x : y;

console.log(max2(10,3));



