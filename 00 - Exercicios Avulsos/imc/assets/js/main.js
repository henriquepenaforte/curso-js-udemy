const nome = document.querySelector('#name');
const altura = document.querySelector('#height');
const peso = document.querySelector('#weight');
const botao = document.querySelector('button');
const res = document.querySelector('#res');
let imc;
let faixa;

botao.addEventListener('click', function () {
    resultado();
})

function calculoIMC () {
    if (typeof altura.value === 'undefined') return alert('Altura inválida');
    if (typeof peso.value === 'undefined') return alert('Peso inválido');
    imc = Number(peso.value)/Number(altura.value)**2;
}

function faixaIMC() {
    if (imc < 16.9) {return faixa = 'muito abaixo do peso'};
    if (imc <= 18.4) {return faixa = 'abaixo do peso'};
    if (imc <= 24.9) {return faixa = 'com peso normal'};
    if (imc <= 29.9) {return faixa = 'acima do peso'};
    if (imc <= 34.9) {return faixa = 'com obesidade grau I'};
    if (imc <= 40) {return faixa = 'com obesidade grau II'};
    if (imc > 40) {return faixa = 'com obesidade grau III'};  
}

function resultado() {
    calculoIMC();
    faixaIMC();
    res.innerHTML = `<p>${nome.value}, seu imc é ${imc.toFixed(2)}. Você está ${faixa}</p>`
}