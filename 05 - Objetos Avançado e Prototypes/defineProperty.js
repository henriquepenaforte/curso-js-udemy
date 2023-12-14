//Se trata de uma forma de freezar uma ou mais propriedades dentro de uma constructor/factory/class

function Produto(nome, preco, estoque) {
    this.nome = nome; //prop publica
    this.preco = preco; //prop publica
    
    Object.defineProperty(this, 'estoque', { 
        enumerable: true, //define se essa propriedade irá aparecer pra leitura 
        value: estoque, //valor da chave/propriedade
        writable: false, //define se o valor da propriedade pode ser alterada
        configurable: false //define se pode ter as configuração feitas no defineProperty e o valor da propriedade redefinidas ou apagadas
    }) 

    Object.defineProperties(this, { //mesma coisa, mas passando as chaves dentro de um objeto no parametro
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true,
        },
        preco: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true,
        },

    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 50000;
console.log(p1); //{ nome: 'Camiseta', preco: 20, estoque: 3 }
delete p1.estoque;
console.log(p1);//{ nome: 'Camiseta', preco: 20, estoque: 3 }
console.log(Object.keys(p1)); //mostra um array com as chaves presentes. ou
for (let i in p1) {
    console.log(i);
}