//factory function

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        //getter
        get nomeCompleto() {
            return `${nome} ${sobrenome}`;
        },

        //setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ');
        },

        fala: function(assunto = 'falando um presset') {
            return `${this.nome} está ${assunto}.`;
        },

        altura,
        peso,

        //getter
        get imc () { //esse 'get' serve para transformar algo dentro de um objeto como um atributo. Usando esse get, agora não precisa mais por parenteses quando for chamar o imc fora, pois este não se trata mais de uma função (mesmo sendo uma).
            const indice = peso/(altura*2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
console.log(p1.imc) //usando a função como um simples atributo
console.log(p1.fala('falando sobre JS', 1.6, 42))
p1.imc = 29; //mesmo mudando o 'atributo' desta forma, o imc ainda retornará o que é calculado dentro do objeto/função
console.log(p1.imc);

p1.nomeCompleto = 'Maria Oliveira Silva'; //o this nesse caso serve para inserir novos valores nos atributos dentro do objeto. Nesse caso, como utilizamos a função dentro do objeto para criar a pessoa colocando na constante p1, caso não se utiliza-se o this, os console.log abaixo ainda retornariam Luiz Otávio.
console.log(p1.nome);
console.log(p1.sobrenome);

//Portanto, o this. serve para atribuir novos valores para os atributos dentro da função fábrica ou objeto.

console.log(p1.fala()); //se nao tivesse o this dentro da função fala, o console.log iria retorna Luiz está falando...