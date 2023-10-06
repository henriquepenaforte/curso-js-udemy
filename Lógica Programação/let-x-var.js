let nome = 'Wladislaw'; //let tem escopo de bloco {... bloco}
var nome2 = 'Jao'; //var só tem escopo de função
var nome2 = 'Jaaaao'; //variavel foi redeclarada


const verdadeira = true;

if (verdadeira) {
    let nome = 'Fabio';  //let tem escopo de bloco. Apesar de não poder declarar novamente uma let de mesmo nome, pelo fato desta está dentro de um escopo local (dentro de chaves), o console.log mostra o let declarada dentro do bloco.
    var nome2 = 'Ronaldo'
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'Outra coisa';
        var nome2 = 'Jããããããããão'
        console.log(nome, nome2);
    }
}

console.log(nome,nome2); //retorna Wladislaw Jããããããããão, pois usa o let declarada no escopo global enquanto a var sempre recebe novo valor quando redeclarada;

//única forma de "proteger" var é colocando dentro de uma função


function falaOi () {
    var nome = 'Henrique';
    var sobrenome = 'Otaviano';

    if (verdadeira) {
        console.log(sobrenome);
        let nome = 'Silvio';
    }

    console.log(nome); //retorna Henrique e nao Silvio, pois este so existe no escopo do if
}

// console.log(sobrenome); dá erro pois a var sobrenome só existe dentro da função

falaOi();

