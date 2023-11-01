//METODOS ARRAY

const numeros = [0,1,2,3,4,5,6,7,8,9,10];

//map, filter, reduce

//FILTER = retorna todos os numeros dentro de um array que atendem determinada função de callback
//FIND = retorna apenas o primeiro
const numPar = numeros.filter((num) => num % 2 === 0);
console.log(numPar);
const numeroPar = numeros.find((num) => num % 2 === 0);
console.log(numeroPar);

//METODOS STRINGS
const frase = "     Uma frase qualquer.   ";
const fraseSemEspacos = frase.trim();
console.log(fraseSemEspacos);
console.log(frase.trim().split(" ")); //separa um texto de acordo com o parametro passado e retorna um array com as strings separadas

const frase2 = 'JavaScript e maizena';
console.log(frase2.startsWith('java')) //retorna boolean (difere maiusc e min)
console.log(frase2.endsWith('zena'))

//TRATAMENTO DE ERROS
const idade = 15;

if (idade >= 18) {
    console.log('permitido')
} else {
    // throw new Error('Voce deve ser maior de idade')
}

//TRY E CATCH
try {
    const idade = 16;
    if (idade < 18) {
        throw new Error('Voce deve ser maior de idade')
    }
} catch (error) {
    console.log(error.message) //neste caso apenas mostra o erro sem interromper o programa
}
console.log('continuando o programa...')

//CALLBACK
function cumprimento (nome, callback) {
    console.log('Olá, ' + nome);
    callback();
}

function mostraSaudacao () {
    console.log('Como vc está')
}

cumprimento('João', mostraSaudacao);
cumprimento('Maria', function(){
    console.log('Bao?')
})

//SETTIMEOUT => Depois de um tempo, executa algo;
function mostraMsg() {
    console.log('Esta msg aparece a partir de 3s')
}
setTimeout(mostraMsg, 3000)

//PROMISSES
const promessa = new Promise((resolve, reject) => {
    const condicao = false //true;

    if (condicao) {
        resolve('A condição é verdadeira')
    } else {
        reject('A condição é falsa!')
    }
})

promessa.then((msg) => {
    console.log(msg)
}).catch((erro) => {
    console.log(erro)
});