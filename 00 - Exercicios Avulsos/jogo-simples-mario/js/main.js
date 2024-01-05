const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const btnMute = document.querySelector('.btn-mute');
const background = document.querySelector('section');

let marioStyleDefault = mario.getAttribute('style');
let pipeStyleDefault = pipe.getAttribute('style');

let score = 0;
let maxScore = 0;
let intervalo;
let vivo = true;
let mutado = false;

document.addEventListener('keydown', jump);
document.addEventListener('keydown', restart);
btnMute.addEventListener('click', () => {mutado ? mutado = false : mutado = true})

function jump (e) {
    if (e.keyCode !== 32) return;
    mario.classList.add('jump');
    if (vivo) jumpSound();

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

function jumpSound () {
    if (mutado) return;
    const somPulo = new Audio('./sounds/jump.wav')
    return somPulo.play();
}

const loop = () => { 
        setInterval(()=> {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

        if (pipePosition <= 120 && marioPosition < 80 && pipePosition > 0) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
            
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`

            mario.src = './img/game-over.png'
            mario.style.width = '75px'
            mario.style.marginLeft = '50px';

            vivo = false;
            background.style.animationPlayState = 'paused';
            clearInterval(loop);
            clearInterval(intervalo);
            clearInterval(pontuacao);
            gameOver();
            pontuacaoMax();
        }
    },10)
}    

function pontuacao () {
    intervalo = setInterval(() => {
        console.log('interval pont')
        score++;
        document.querySelector('#score').innerHTML = score;
    },1500)
} 

function pontuacaoMax() {
    if (score > maxScore) {
        maxScore = score;
        document.querySelector('#max-score').innerHTML = maxScore;
    }
}

function gameOver () {
    document.querySelector('main h1').style.display = 'block';
    document.querySelector('main p').style.display = 'block';
}

function restart (e) {
    if(e.keyCode === 82) {
        if (vivo) { 
            return;
        } else {
            score = 0;
            document.querySelector('#score').innerHTML = score;
            pontuacao();
            mario.src = './img/mario.gif'
            mario.style = marioStyleDefault;
            pipe.style = pipeStyleDefault;
           
            document.querySelector('main h1').style.display = 'none';
            document.querySelector('main p').style.display = 'none';
            vivo = true;
            background.style.animationPlayState = 'running'
            loop();
        }
    }
}

document.addEventListener('load', loop());
document.addEventListener('load', pontuacao());
