const _velocidade = Symbol('_velocidade'); //'velocidade' não é um parâmetro, é so uma identificação desse Symbol;
//note que um symbol sempre gera um valor único, tanto que se compararmos:
console.log(Symbol() === Symbol()); //sempre retorna false;

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }
    
    get velocidade() { //o get serve primeiramente para permitir que um método seja acessado como uma propriedade. Além de proteger o valor real, que nesse caso é o symbol [_velocidade].
        console.log('GETTER');
        return this[_velocidade];
    }

    set velocidade(valor) { //já o set serve para permitir que uma propriedade seja alterada, mas de acordo com as condições e configurações desejadas:
        console.log('SETTER');
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    frear () {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for (let i = 0; i <= 200; i++) {
    c1.acelerar()
}
console.log(c1);

c1.velocidade = 1500;  //nada impede que a propriedade seja alterada indesejadamente. Para evitar isso, dá para criar propriedades privadas usando o Symbol (tipo de dado primitivo que gera um valor único sempre que é chamado)

console.log(c1.velocidade); //100
c1.velocidade = 80;
console.log(c1.velocidade); //como 80 tá dentro das condições do setter, é permitido a alteração

console.log('============outro exemplo================')
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome
    }
    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const pessoa1 = new Pessoa('Xabs', 'Oliveira');
console.log(pessoa1.nomeCompleto); //getter
pessoa1.nomeCompleto = 'Fabin Dias' //setter
console.log(pessoa1.nomeCompleto);
console.log(pessoa1.sobrenome);