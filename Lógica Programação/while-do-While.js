let i = 0;

while (i <= 10) {
    console.log(i);
    i++
}

const nome = 'Luiz';
let c = 0;
while (c < nome.length) {
    console.log(nome[c]);
    c++
}

function random (min,max) {
    const r = Math.round(Math.random() * (max - min) + min);
    return r;
}

const min = 1;
const max = 50;
let rand = random(min, max);
let vezes = 0;

while (rand !== 10) { 
    rand = random(min,max);
    vezes++
}
console.log(vezes);

// a diferen







