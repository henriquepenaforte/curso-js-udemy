module.exports = class Cachorro {
    constructor(nome, raca, cor) {
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        return this.nome + ' está latindo'
    }
} 