function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.fala = function (e) { //esse metodo pode ser chamado de fora da função, assim como os atributos acima (atrib/metodos públicos)
        console.log(`${this.nome} fala oi`)
    };

    //abaixo estão atributos privados, que nao podem ser acessados de fora da função
    const id = 123456;
    const outroMetodo = function() {
        return xabs
    }
}

const pessoa1 = new Pessoa('Fabin', 'de Paula');
pessoa1.fala();