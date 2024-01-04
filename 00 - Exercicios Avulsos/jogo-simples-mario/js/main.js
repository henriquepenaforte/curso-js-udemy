const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

let marioStyleDefault = mario.getAttribute('style');
let pipeStyleDefault = pipe.getAttribute('style');

let score = 0;
let maxScore = 0;

document.addEventListener('keydown', jump);
document.addEventListener('keydown', restart);


function jump () {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

const loop = setInterval(()=> {
        console.log('a')
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

            clearInterval(loop);
            clearInterval(pountuacao);
            gameOver();
            pontuacaoMax();
        }
    },10)
    
const pountuacao = setInterval(() => {
    score++;
    document.querySelector('#score').innerHTML = score;
},1500)

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
        pountuacao;
        mario.src = './img/mario.gif'
        mario.style = marioStyleDefault;
        pipe.style = pipeStyleDefault;
       
        document.querySelector('main h1').style.display = 'none';
        document.querySelector('main p').style.display = 'none';
        
        loop()
    }
}
