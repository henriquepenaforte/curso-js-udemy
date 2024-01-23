function rand(max, min) {
    return Math.round(Math.random() * (max - min) + min)
}

function geraMaiscula () {
    return String.fromCharCode(rand(65,91))
}

function geraMinuscula () {
    return String.fromCharCode(rand(97,123))
}

function geraNumero () {
    return String.fromCharCode(rand(48,58))
}

const simbolos = ',.;^~[]{}!@#$%*_=+-'

function geraSimbolo () {
    return simbolos[rand(0, simbolos.length)]
}

export default function geraSenha(qtd = 4, maiusculas = false, minusculas = false, numeros = false, simbolos = false) {
    const senhaArr = [];
    qtd = Number(qtd);
    for (let i = 0; i < qtd; i++) {
        maiusculas && senhaArr.push(geraMaiscula());
        minusculas && senhaArr.push(geraMinuscula());
        numeros && senhaArr.push(geraNumero());
        simbolos && senhaArr.push(geraSimbolo());
    }
    return senhaArr.join('').slice(0, qtd);
}



