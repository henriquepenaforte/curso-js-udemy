let timer = document.querySelector('#timer');
let iniciar = document.querySelector('#iniciar');
let pausar = document.querySelector('#pausar');
let zerar = document.querySelector('#zerar');
let segundos = 0;
let intervalo;

iniciar.addEventListener('click', iniciarTimer);

pausar.addEventListener('click', pausarTimer);

zerar.addEventListener('click', zerarTimer);

function tempoSegundos (seg) {
    let data = new Date(seg * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciarTimer() {
    clearInterval(intervalo);
    timer.style.color = 'black';
    intervalo = setInterval(function(){
        segundos++;
        timer.innerHTML = tempoSegundos(segundos);
    }, 1000)
  
}

function pausarTimer() {
    timer.style.color = 'red';
    clearInterval(intervalo);
}

function zerarTimer() {
    timer.style.color = 'black';
    clearInterval(intervalo);
    timer.innerHTML = '00:00:00';
    segundos = 0;
}



