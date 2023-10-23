const numeros = [0,1,2,3,4,5,6,7,8,9];

for (let n of numeros) {
    if (n === 2) {
        console.log('Pulei o numero 2')
        continue; //nesse caso, o for irá continuar a partir da proxima iteração sem executar o console.log abaixo
    }

    console.log(n); //vai retornar o array sem o 2;

    if (n === 7) {
        console.log('Sete encontrado, saindo ...')
        break //nessa caso, quando a iteração chegar no 7, o for é 'quebrado' e vai interromper o restante das iterações
    }
}

let i = 0;

while (i < numeros.length) {
    let num = numeros[i];
    
    if (num === 2) {
        console.log('Pulei novamente o numero 2');
        i++
        continue;
    }

    console.log(`O numero é ${num}`);

    if (num === 8) {
        console.log('Numero 8 encontrado, saindo...');
        i++;
        break;
    }
    i++;
}