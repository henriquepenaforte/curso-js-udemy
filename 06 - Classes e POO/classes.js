//As classes não permitem que métodos sejam adicionados posteriormente por prototype, somente as propriedades. Em contrapartida, os objetos instanciados já recebem os métodos do corpo da class por prototype, sem necessidade de outras configurações:

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`)
    }

    comer () {
        console.log(`${this.nome} está comendo.`)
    }

    beber () {
        console.log(`${this.nome} está bebendo.`)
    }
}

//instanciar = criar um objeto a partir de uma classe
const p1 = new Pessoa('Fabin', 'Oliveira');
p1.beber();
console.log(p1); //Pessoa { nome: 'Fabin', sobrenome: 'Oliveira' }

//comparando com uma constructor function com o método dentro do escopo:
function OutraPessoa (nome) {
    this.nome = nome;
    this.fala = function () {
        console.log('falaaaaaa')
    }
}

const pConstr = new OutraPessoa('xabs');
console.log(pConstr); //OutraPessoa { nome: 'xabs', fala: [Function (anonymous)] 