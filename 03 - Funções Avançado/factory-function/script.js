let calculadora = document.querySelector("#calculadora");
let mostrador = document.querySelector('.display');

calculadora.addEventListener('click', function(e) {
    let el = e.target;
    if(el.classList.contains('btn-num')) {
        mostrador.value += el.innerText;
    }
})

calculadora.addEventListener('click', function(e) {
    let el = e.target;
    if(el.classList.contains('btn-clear')) {
        mostrador.value = " ";
    }
})
