
function Produto (nome, preco, estoq) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoq;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        //value: estoq, nao ira ser necessário
        //writable: true, nao ira ser necessário
        configurable: true,
        get: function () {
            return estoquePrivado;
        },
        set: function (value) {
            if (typeof value !== 'number') {
                throw new Error('Valor inválido');
            }

            estoquePrivado = value;
        }
    })
}

const p1 = new Produto('camisa', 20, 3);
//console.log(p1);
//p1.estoque = 'O valor que eu quero';
console.log(p1);
console.log(p1.estoque)
p1.estoque = 5;
console.log(p1.estoque);