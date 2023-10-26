//Escopo Global

function retornaFuncao () {
    const nome = 'Fábio'; //escopo lexico da mae
    return function () { //escopo lexico filha
        return nome 
    }
}

const funcao = retornaFuncao();
console.log(funcao); //retorna apenas [Function anonymous] pois a função mae retorna outra função
console.log(funcao()) //já nesse caso, esta retornando a função dentro da função, no caso a filha. E esta possui acesso ao escopo da mãe, por isso retorna 'Fabio'.

//Da mesma forma ocorre com os parametros:

function retornaOutraFuncao (nome) {
    return function () { 
        return nome 
    }
}

const nome1 = retornaOutraFuncao('João');
const nome2 = retornaOutraFuncao('Maria');
console.log(nome1(), nome2());