/*
    Valores Primitivos (imutáveis) - string, number, boolean, undefined, null, bigint, symbol
    
    Valores por Referência (mutáveis) - array, object, function
*/

//imutáveis:
let nome = 'Luan';
nome[0] = 'R';
console.log(nome); // ainda retorna Luan, pois strings são imutávei

let a = 'A';
let b = a; //cria uma cópia
a = 'Outra coisa'; //mesmo mudando o valor de a, b é uma string imutável. Entao, ambas variáveis são independentes.
console.log(a,b)

//mutáveis
let x = [1,2,3];
let y = x;
console.log(x,y); //retorna = [1,2,3] [1,2,3]
x.push(4);
console.log(x,y); //retorna = [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ], msm mudando apenas x
y.pop()
console.log(x,y) //retorna = [1,2,3] [1,2,3], msm mudando apenas y
/*ou seja, valores passados por referência criam uma ligação entre as variáveis, referenciando o mesmo valor na memória */

//para apenas copiar um valor de valores mutáveis, basta usar o 'spread' => [...]:
let z = [...x]
x.push("xablau")
console.log(z); //retorna = [1,2,3] msm com a mudança anterior, visto que o valor foi copiado e não referenciado;