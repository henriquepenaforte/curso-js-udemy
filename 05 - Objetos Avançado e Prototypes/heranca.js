// camiseta, caneca, lapis
// crie uma funcao para servir de molde para os itens acima
// primeiro passo é notar o que eles têm em comum
// depois verificar as especificidades de cada um:
/* 
    camiseta: cor, material,
    lapis: cor, 
    caneca: cor, material
*/
function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

//criando um constructor que herdará os caracteristicas de outro constructor 
function Camiseta(nome, preco, cor, material) { 
    Produto.call(this, nome, preco); //linkando a funcao produto
    this.cor = cor;
    this.material = material; //atributo que Produto nao tem
}

Camiseta.prototype = Object.create(Produto.prototype); //Camiseta herda de Produto, mas seu constructor ainda é Produto, o que pode gerar bugs

Camiseta.prototype.constructor = Camiseta; //com isso, camiseta herda os métodos do constructor Produto, mas mantém sua identidade como constructor em si.


const regata = new Camiseta('regata', 20);
console.log(regata);

//outro constructor:

function Copos (nome, preco, cor, material, estoque) {
    Produto.call(this, nome, preco);
    this.cor = cor;
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor
        }
    })
};

Copos.prototype = Object.create(Produto.prototype);
Copos.prototype.constructor = Copos;

const caneca = new Copos('caneca', 10, 'branca', 'porcelana', 5);
console.log(caneca);
caneca.estoque = 'fewfdwwfed' // o setter filtra um valor inválido, continuando 5