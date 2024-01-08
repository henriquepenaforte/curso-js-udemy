function rand (min, max) {
    min *= 1000;
    max *= 1000;
    return Math.round(Math.random() * (max - min) + min)
}

function espera (msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('BAD VALUE');
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' Passei na promise');
        }, tempo);
    });
}

//Promise.all   Promise.race   Promise.resolve    Promise.reject

const promises = [
    //'primeiro valor',
    espera('Promise 1', 3000),
    espera('Promise 2', 400),
    espera('Promise 3', 1000),
    //espera(1000, 1000), promise rejeitada
    //'outro valor',

];

//Promise.all(promises) //retorna os valores(then) de todos os promises dentro de um array de uma só vez quando todas as promises forem resolvidas
    /* .then((valor) => {
        console.log(valor)
    })
    .catch((erro) => {
        console.log(erro)
    }); */
//se uma promessa dentro do .all for rejeitada, todas as outras serão também rejeitadas.

Promise.race(promises) //retorna a primeira promisse resolvida, ou o erro se este for mais 'rapido'.
    .then((valor) => {
        console.log(valor)
    })
    .catch((erro) => {
        console.log(erro)
    });

function baixaPagina () {
    const emCache = true;
    if (emCache) {
        //return Promise.resolve('Página em cache');
        return Promise.reject('Página em cache');
    } else {
        return espera('Baixei a página', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log(e))