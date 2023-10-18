let lampada = document.querySelector('#lampada');
let ligar = document.querySelector('.ligar');
let apagar = document.querySelector('.apagar');
let estado;

ligar.addEventListener('click', function(e) {
    if (estado === 'quebrada') return
    lampada.src = './img/ligada.jpg' 
})

lampada.addEventListener('mouseover', function(e) {
    if (estado === 'quebrada') return
    lampada.src = './img/ligada.jpg' 
})

apagar.addEventListener('click', function(e) {
    if (estado === 'quebrada') return
    lampada.src = './img/desligada.jpg' 
})

lampada.addEventListener('mouseout', function(e) {
    if (estado === 'quebrada') return
    lampada.src = './img/desligada.jpg' 
})


lampada.addEventListener('click', function(e) {
    lampada.src = './img/quebrada.jpg';
    estado = 'quebrada'
})


