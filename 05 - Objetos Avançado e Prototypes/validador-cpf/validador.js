// 705.484.450-52     070.987.720-03
//a validação de um cpf se dá por dois cálculos em cima dos 9 primeiros dígitos que irão 'bater' com os dois últimos

/* 
7x 0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2  (regressao de 10)
70  0  40 28 48 20 16 15 0     = 237 (total da soma das multiplicações)

formula do dígito: 11 - (237 % 11) = 5 (primeiro dígito)
*se o resultado dessa formula for maior que 9, considera 0;

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x (acrescentando o digito encontrado anteriormente)
11 10  9  8  7  6  5  4  3  2 (regressão de 11)
77  0 45 32 56 24 20 20  0 10  = 284

formula do dígito: 11 - (284 % 11) = 2 (segundo dígito)
*se o resultado dessa formula for maior que 9, considera 0;

ao concatenar os 9 primeiros dígitos com os dois gerados pelo cálculo, se o resultado final bater com o cpf inicial, o mesmo se é um cpf válido:
                705.484.450-52 === 705.484.450-52
*/

let cpf = '985.781.183-57';

let cpf9 = cpf.slice(0,11).split('.').join('').split(''); //array com os 9 numeros separados 

function primeiroDigito () {
    let multiplicador = 10;
    let acumulador = 0;
    for (let i of cpf9) {
        acumulador += i*multiplicador;
        multiplicador-- 
    };
    let res = 11 - (acumulador % 11);
    return res
}

function segundoDigito() {
    let cpfTemp = [...cpf9];
    cpfTemp.push(primeiroDigito());
    let multiplicador = 11;
    let acumulador = 0;
    for (let i of cpfTemp) {
        acumulador += i*multiplicador;
        multiplicador-- 
    };
    let res = 11 - (acumulador % 11);
    return res
}

function validador () {
    let res1 = primeiroDigito();
    let res2 = segundoDigito();
    let cpfComparacao = cpf.replace(/\D+/g, '');
    let conc = [...cpf9, ...[res1], ...[res2]];
    return conc.join('') === cpfComparacao
}
console.log(validador())