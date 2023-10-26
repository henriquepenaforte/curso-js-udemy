function tempoAleatorio (){
    let n = Math.random()
    return Math.round(n * 1000)
}

function f1(c) {
    setTimeout(function() {
        console.log('f1')
        if (c) c()
    },tempoAleatorio());
}
function f2(c) {
    setTimeout(function() {
        console.log('f2')
        if (c) c()
    },tempoAleatorio());
}
function f3(c) {
    setTimeout(function() {
        console.log('f3')
        if (c) c()
    },tempoAleatorio());
}
/*
f1(function() {
    f2(function() {
        f3(function() {
            console.log('Olá Mundo')
        })
    })
})
*/

//Da forma acima, as funções só serao executadas na ordem esperada, independente do tempo que o SetTimeout estipulou. Mas construir o callback dessa forma pode ser maçante visto que fica uma dentro da outra infinitamente (callback hell). Uma forma melhor de fazer seria:

f1(f1Callback);

function f1Callback() {
    f2(f2Callback)
};

function f2Callback() {
    f3(f3Callback)
}

function f3Callback() {
    console.log('Fim')
}