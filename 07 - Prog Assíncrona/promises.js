function aleatorio (min, max) {
    min *= 1000;
    max *= 1000;
    return Math.round(Math.random() * (max - min) + min)
}

function espera (msg, tempo,) {
    setTimeout(() => {
        console.log(msg)
    }, tempo);
}

//abaixo, as frases serão aleatorias, não seguirao necessariamente a ordem:
/* espera('Frase 1', aleatorio(1,3));
espera('Frase 2', aleatorio(1,3));
espera('Frase 3', aleatorio(1,3)); */

console.log('=========modo antigo de fazer prog assinc:========')

function espera2 (msg, tempo, callback) {
    setTimeout(() => {
        console.log(msg);
        if (callback) callback();
    }, tempo);
}
//independente do tempo do timeout, as frases sempre irao estar em ordem, mas n é a melhor solução (callback hell)
/* espera2('frase 1', aleatorio(1,3), () => {
    espera2('frase 2', aleatorio(1,3), () => {
        espera2('frase 3', aleatorio(1,3))
    })
}) */

console.log('=========modo moderno de fazer prog assinc:========')

function espera3 (msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE')
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

espera3('Frase 1', aleatorio(1,3))
    .then(resposta => {
        console.log(resposta);
        return espera3('Frase 2', aleatorio(1,3));
    })
    .then(resposta => {
        console.log(resposta);
        return espera3('Frase 3', aleatorio(1,3));
    })
    .then(resposta => {
        console.log(resposta);
        return espera3(23123123, aleatorio(1,3));
    })
    .then(resposta => {
        console.log(resposta);
        return espera3('Frase 4', aleatorio(1,3));
    })
    .then(() => {
        console.log('Fim do Programa')
    })  
    .catch(e => {
        console.log('ERRO:', e);
    });