//Map - altera valores do array, recebendo o array com o mesmo tamanho do array original

const numeros = [5, 60, 80, 1, 2, 30, 11, 10, 999, 54, 5, 3];

//dobre os números:
const numDobrados = numeros.map(valor => valor * 2);
console.log(numDobrados);
const numDobradosComIndice = numDobrados.map((valor, indice) => valor + ` índice -> ${indice}`);
console.log(numDobradosComIndice);


console.log("=====================exercicios=========================")
//para cada elemento:
/* retorne apenas uma string com o nome da pessoa;
   remova apenas a chave "nome" do objeto;
   adicione uma chave id em cada objeto */

   const pessoas = [
    {nome: 'Luiz', idade: 52},
    {nome: 'Ana', idade: 20},
    {nome: 'Armando', idade: 70},
    {nome: 'Bruna', idade: 13},
    {nome: 'Julia', idade: 30},
    {nome: 'Jão', idade: 83},
]

const stringNome = pessoas.map(indice => indice.nome);
console.log(stringNome);

const removeChaveNome = pessoas.map((obj) => {
    // delete obj.nome; //ao deletar a chave nome, pelo map, o array de objetos original (pessoas) também é modificado, por isso, é melhor fazer da seguinte forma:
    return {idade: obj.idade}; //retornando um novo array com os objetos mapeados
});
console.log(removeChaveNome);

const pessoasComId = pessoas.map((obj, indice)=> {
    //obj.id = indice + 1; //dessa forma também modifica o array original, para evitar:
    const newObj = {...obj}; //usando o spread
    newObj.id = indice + 1 //somando mais 1 para n começar o id do zero
    return newObj;
})
console.log(pessoasComId);
console.log(pessoas); //continua sem modificações

//fora materia:
const id = '1';
const idMelhorado = id.padStart(4, 0); //padstart so funciona com string
console.log(idMelhorado);