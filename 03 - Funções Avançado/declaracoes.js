//Declaração de Função clássica:

falaOi(); //funções declaradas de forma clássica sofrem hoisting, logo dá para chamá-las mesmo antes delas serem declaradas(desde que elas existam no documento)

function falaOi() {
    console.log('Oi')
}

//First-class objects ou function expression:

const souUmDado = function () {
    console.log('Sou um dado')
}

function executaFuncao (funcao) {
    funcao()
}

executaFuncao(souUmDado);

//Arrow function

const souOutroDado = () => {
    console.log('Sou outro dado')
}
souOutroDado();

//dentro de um objeto:

const obj = {
    falar() {
        console.log('sou uma função dentro de objeto')
    }
}