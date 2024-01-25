const nome = 'Fabin';
const sobrenome = 'Oliveira';
const idade = 23;
const peso = 110;


const falaNome = () => {
    console.log(nome, sobrenome);
};

//modo manual de exportação
/* module.exports.nome = nome;
module.exports.sobrenomenome = sobrenomenome;
module.exports.falaNome = falaNome; */

exports.nome = nome;
exports.sobren = sobrenome;
exports.idade = idade;
exports.peso = peso;
exports.falaNome = falaNome;
this.qualquerCoisa = 'Qualquer coisa que eu quiser exportar'

console.log(module); 

class Carro {
    constructor(marca, cor) {
        this.marca = marca;
        this.cor = cor;
    }
}

exports.Carro = Carro;
