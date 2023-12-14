//declaração clássica de objeto: (literal)
const pessoa = {
    nome: 'Fabio',
    sobrenome: 'Leroy'
}

console.log(pessoa.nome); //forma classica de acessar uma propriedade
console.log(pessoa['nome']); //notação de colchetes

//outra forma de declaração:
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
console.log(pessoa1);

//apagando uma propriedade/chave: 
delete pessoa1.nome;
console.log(pessoa1);

//acrescentando uma propriedadade:
pessoa.idade = 30;

//acrescentando métodos/funções:
pessoa.falaAlgo = function () {
    return(`${this.nome} está falando algo...`)
}
console.log(pessoa.falaAlgo());


pessoa.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade 
}
console.log(pessoa.getDataNascimento())

//iterando as propriedades:
console.log('=========iterando as propriedades de um objeto=======')
for (let i in pessoa) {
    console.log(pessoa[i]);
}

//factory functions x constructor functions x classes 
//formas diferentes de se trabalhar com POO, geralmente se escolhe uma e adapta para a necessidade. Class tem uma sintaxe propria que facilita o entendimento.

//factory:
console.log('==========factory func p/ criação de objetos===============')
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return this.nome + ' ' + this.sobrenome
        }
    }
}
const p1 = criaPessoa('Jão', 'Silva');
console.log(p1.nomeCompleto);

//constructor:
console.log('==========constructor func p/ criação de objetos===============')
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
const p2 = new Pessoa('Marco', 'Polo') //a palavra reservada new cria um objeto vazio a partir da constructor.
console.log(p2);
const p3 = new Pessoa('Maria', 'Clara');
console.log(p3);
p3.nome = 'Amanda'; //modificando o atributo do objeto criado
console.log(p3);

//é possivel bloquear as alteraçõs nas propriedades de um objeto usando o .freeze:
Object.freeze(p2); //'travando' um objeto criado
p2.nome = 'Xablau';
console.log(p2); //ainda é Pessoa { nome: 'Marco', sobrenome: 'Polo' }

//também é possivel dar freeze logo dentro do construtor, assim, nenhum objeto criado a partir desse construtor poderá ser alterado:

function NovaPessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); //dessa forma, todo objeto criado com esse constructor nao pode ter seus atributos trocados
}

const p4 = new NovaPessoa('Julio', 'Cesar');
p4.nome = 'Geraldo';
console.log(p4); //se mantem NovaPessoa { nome: 'Julio', sobrenome: 'Cesar' }
//também n é possivel acrescentar propriedades nem metodos a objetos freezados
p4.fala = function() {console.log('oi')};
p4.fala(); //da erro