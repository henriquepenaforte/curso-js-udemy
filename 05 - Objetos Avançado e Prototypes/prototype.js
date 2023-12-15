function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => 'MÉTODO ORIGINAL' + ' ' + this.nome + ' ' + this.sobrenome
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

//o JS primeiro verifica se o método existe dentro do objeto depois verifica se existe no prototype, portanto, se o método adicionado por protype já existir no objeto em questão, o 'original' será chamado.


const pessoa1 = new Pessoa('Xabs', 'Oliveira');
console.log(pessoa1.nomeCompleto())
console.log(pessoa1); //Pessoa { nome: 'Xabs', sobrenome: 'Oliveira' }
//a pessoa1 não possui o método nomeCompleto no seu escopo, mas possui acesso ao método do pai Pessoa.

//Manipulando Prototypes: Atribuindo um objeto como prototype de outro:
// new Object -> Object.prototype
const objA = {
    chaveA: 'A',
    // __proto__: Object.prototype
}

const objB = {
    chaveB: 'B',
    // __proto__: Object.prototype
}

Object.setPrototypeOf(objB, objA); //agora o objeto A é pai de B
//nesse caso, criou-se uma nova instancia hierarquica nos objetos:
// agora objB tem acesso ao objA e também ao Object.prototype
//por mais que existam objetos filhos de outros, esses sempre terao acesso às cadeias superiores.

const objC = new Object();
objC.chaveC = 'C';
Object.setPrototypeOf(objC, objB);

console.log(objC.chaveA, objC.chaveB); //objC agora tem acesso a B que tem acesso a A, ou seja, objC também tem acesso a objA.

//exemplo com função construtora
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(porcento) {
    this.preco = this.preco - (this.preco * (porcento/100))
}

Produto.prototype.aumento = function(porcento) {
    this.preco = this.preco + (this.preco * (porcento/100))
}

const produto1 = new Produto('Camisa', 50);
produto1.desconto(10);
console.log(produto1);

//nesse caso, percebe-se que normalmente se cria uma class ou uma função construtora somente com os atributos/propriedades, e se vai acrescentando os métodos posteriormente

//também é possivel aproveitar os métodos de uma class ou constructor para objetos literais criados posteriormente (desde que os nomes das propriedades sejam iguais):

const produto2 = {
    nome: 'caneca',
    preco: 15,
}

Object.setPrototypeOf(produto2, Produto.prototype);
produto2.aumento(100);
console.log(produto2); //Produto { nome: 'caneca', preco: 30 } 

//outra forma de criar objetos baseados em outros e ainda acrescentando mais chaves e propriedades?

const produto3 = Object.create(Produto.prototype, {
    nome: { //nessa forma, as propriedades necessitam ser objetos tbm
        enumerable: true,
        writable: true,
        configurable: true,
        value: 'sapato'
    },
    preco: {
        writable: true,
        enumerable: true,
        configurable: false,
        value: 80
    },
    tamanho: { //usando o defineProperty dentro da chave nova
        enumerable: true,
        writable: true,
        value: 42,
        configurable: false,
    },
});

produto3.aumento(50); 
console.log(produto3); //Produto { nome: 'sapato', preco: 120, tamanho: 42 }