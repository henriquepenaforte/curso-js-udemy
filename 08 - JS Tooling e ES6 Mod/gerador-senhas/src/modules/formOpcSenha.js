import geraSenha from "./gerador";

const senhaGerada = document.querySelector('#generated-password');
const qtdCaracteres = document.querySelector('#num-char');
const checkMaiusculas = document.querySelector('#uppercase');
const checkMinusculas = document.querySelector('#lowercase');
const checkNumeros = document.querySelector('#num');
const checkSimbolos = document.querySelector('#esp-char');
const btnGera = document.querySelector('#generate');

export default () => {
    btnGera.addEventListener('click', () => {
        senhaGerada.innerHTML = gera()
    })
}

function gera () {
    const senha = geraSenha(
        qtdCaracteres.value,
        checkMaiusculas.checked, 
        checkMinusculas.checked,
        checkNumeros.checked,
        checkSimbolos.checked 
    )
    return senha;
}