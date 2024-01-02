const tela = document.querySelector('#container');
const btnPrevious = document.querySelector('#previous');
const btnNext = document.querySelector('#next');

const arrImg = [];
for (let i = 1; i < 6; i++) {
    arrImg.push(`url(./img/foto-${i}.jpg)`)
}
let pos = 0;

btnNext.addEventListener('click', () => {
    nextImg();
})

btnPrevious.addEventListener('click', () => {
    prevImg()
})

function nextImg() {
    pos >= 5 ? pos = 0 : pos++;
    tela.style.backgroundImage = arrImg[pos]
}

function prevImg() {
    pos <= 0 ? pos = 5 : pos--;
    tela.style.backgroundImage = arrImg[pos]
}
