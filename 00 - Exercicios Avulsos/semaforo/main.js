let img = document.querySelector('#semaforo');
let botoes = document.querySelector('#botoes');
let indiceCor = 0;
let intervalId;

const semaforoTransito = (e) => {
    pararAutomatico();
    ligar[e.target.id]();
}

const proximoIndice = () => {
    indiceCor < 2 ? indiceCor++ : indiceCor = 0;
}

const trocaCor = () => {
    const cores = ['vermelho', 'amarelo', 'verde'];
    const cor = cores[indiceCor];
    ligar[cor]();
    proximoIndice();
}

const pararAutomatico = () => {
    clearInterval (intervalId);
}

const ligar = {
    vermelho: () => img.src = './img/vermelho.png',
    amarelo: () => img.src = './img/amarelo.png',
    verde: () => img.src = './img/verde.png',
    automatico: () => intervalId = setInterval(trocaCor, 1000),
} 


botoes.addEventListener('click', semaforoTransito)