function* geradora1 () {
    //linhas de codigo qualquer...
    yield 'Valor 1';
    //linhas de codigo qualquer...
    yield 'Valor 2';
    //linhas de codigo qualquer...
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1); //retorna Object [Generator] {}
console.log(g1.next()); //retorna { value: 'Valor 1', done: false }
console.log(g1.next().value); //retorna simplesmente Valor 2;
console.log(g1.next().value); //retorna simplesmente Valor 3;
console.log(g1.next()); //retorna { value: undefined, done: true }

const g2 = geradora1();
for (let i of g2) {
    console.log(i) //retorna so os valores
};

function* geradora2 () {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}

console.log('=============exemplo gerador infinito================')

const g3 = geradora2();
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);

console.log("=====exemplo gerador dentro de outro gerador========")

function* geradora3 () {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3(); //para fazer com que uma funcao geradora fique responsável por chamar outra funcao geradora, basta acrescentar o asterisco no yield e fazer com que essa funcao "segure" a outra
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (let i of g4) {
    console.log(i);
}

console.log("=====outro exemplo gerador dentro de outro gerador========")
function* geradora5() {
    yield function() {
        console.log('Vim do primeiro yield')
    }
    yield function () {
        console.log('Vim do segundo yield')
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();