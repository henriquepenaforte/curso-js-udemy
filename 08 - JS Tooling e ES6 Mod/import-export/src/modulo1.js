const nome = 'Xabs';
const sobrenome = 'Xablau';
const idade = 20;

function soma(x = 0, y = 0) {
    return x + y;
}

/* export {nome, sobrenome, idade, soma} */
export {nome as nome2, sobrenome as sobrenome2, idade as idade2, soma};

//outra forma de exportar é diretamente na declaração:
export function diferenca(x = 0, y = 0) {
    return x-y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export default function falaAlgo() {
    console.log('Esta função foi exportada por default')
}

//OBS: default ou padrao, so existe um por módulo