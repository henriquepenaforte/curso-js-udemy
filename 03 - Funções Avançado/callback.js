function tempoAleatorio (){
    let n = Math.random()
    return Math.round(n * 2000)
}


function f1() {
    setTimeout(function() {
        console.log('f1')
    },tempoAleatorio());
}
function f2() {
    setTimeout(function() {
        console.log('f2')
    },tempoAleatorio());
}
function f3() {
    setTimeout(function() {
        console.log('f3')
    },tempoAleatorio());
}

f1();
f2();
f3();
console.log('Olá Mundo') //sempre vai ser a primeira a ser executada pois nao possui timeout

//no caso acima, a intenção do código era executar em ordem o f1, f2, f3 e posteriormente o console.log. Por conta do timeout, isso muitas vezes não vai acontecer. Para fazer com que as funçoes funcionem na ordem esperada, usa-se o Callback (ver no prox arq)
