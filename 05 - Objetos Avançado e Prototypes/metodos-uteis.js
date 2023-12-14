//Object.keys() - retorna as chaves;
//Object.freeze(this, nomeProp) - congela o objeto ou a propriedade em questão;
//Object.defineProperty(this, 'nomeProp',{enumerable, writable etc}) - configura uma propriedade em alguns pontos (leitura, reconfig, alteração);
//Object.defineProperties(this, {prop1:  , prop2:   }) - define diversas propriedades da mesma forma que o anterior;


//assim como os arrays, os objetos apontam para um mesmo local da memória, ou seja, objetos que sao gerados por outros objetos que tem suas propriedades/metodos alterados, também altera o objeto original. A forma de proteger isso é igual também, usando o spread(...):
const produto = {nome: 'copo', preço: 2.3};
const outroProduto = {
    ...produto,
    material: 'porcelana',
    capacidade: 300
};
console.log(outroProduto);
console.log(produto);

//outra forma de copiar um objeto sem criar vínculo:
const garrafa = Object.assign({}, produto, {cor: 'transparente'});
garrafa.nome = 'garrafa';
garrafa.capacidade = 1000;
console.log(garrafa);
console.log(produto); //continua sem alterações

//outra forma de copiar um objeto sem criar vínculo por propriedade:
const caneca = {nome: produto.nome, material: outroProduto.material};
console.log(caneca);

//metodo: getOwnPropertyDescriptor():
console.log('==========metodo: getOwnPropertyDescriptor():============')
const pessoa = {
    nome: 'Alef',
    sobrenome: 'Manga',
    nacionalidade: 'brasileiro'
};
console.log(Object.getOwnPropertyDescriptor(pessoa, 'nome')); //retorna as caracteristicas da propriedade em questão: { value: 'Alef', writable: true, enumerable: true, configurable: true }

Object.defineProperty(pessoa, 'nacionalidade', {
    enumerable: true,
    writable: false,
    configurable: false,
})

console.log(Object.getOwnPropertyDescriptor(pessoa, 'nacionalidade'));

//método: object.values = retorna um array com os valores do objeto
console.log('==============metodo: values():===============')
console.log(Object.values(pessoa)); //[ 'Alef', 'Manga', 'brasileiro' ]

//método: object.entries = retorna um array de outros arrays que contêm chave e valor do objeto:
console.log('==============metodo: entries():===============')
console.log(Object.entries(pessoa));

//sendo possivel iterar sobre esse array de arrays:
for (let entry of Object.entries(pessoa)) {
    console.log(entry);
}