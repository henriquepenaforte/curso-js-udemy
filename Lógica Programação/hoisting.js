//hoisting com var

console.log(sobrenome); // Se nao tiver nenhuma var com esse nome declarada, retorna um erro. Caso a var seja declarada posteriomente, este passa a retornar undefined

var sobrenome = 'Pereira'; 

//hoisting com let

console.log(nome); // sempre retorna erro, mesmo declarando posteriormente.

let nome = 'Francisco';