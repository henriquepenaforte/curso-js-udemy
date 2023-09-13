//Objetos servem para guardar diveros valores ou parametros dentro de uma só variável

const pessoa1 = {
    nome: 'Fabin',
    sobrenome: 'Ferreira',
    idade: 24,
};

//Lembre-se que as declarações dentro de um objeto devem ser atribuídas com : e separadas com , 

console.log(pessoa1.nome);

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    }
}

const pessoa2 = criaPessoa('Xabs', 'Oliveira', 34);
const pessoa3 = criaPessoa('Xabas', 'Oliva', 24);
const pessoa4 = criaPessoa('Xabsy', 'Oliver', 84);
const pessoa5 = criaPessoa('Xabus', 'Oli', 14);
const pessoa6 = criaPessoa('Xabaaas', 'Olive', 54);

console.log(pessoa2.idade, pessoa5.sobrenome);

//também é possivel criar funções dentro de objects. (chamadas métodos)

const pessoa = {
    nome: 'Sivirino',
    sobrenome: 'Alves',
    idade: 75,

    fala() {
        console.log(`${this.nome} ${this.sobrenome}, tem ${this.idade} anos e é issae`)
    },

    incrementaIdade() {
        this.idade++
    }
}

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
