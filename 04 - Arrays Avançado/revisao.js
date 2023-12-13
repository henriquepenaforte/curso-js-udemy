const nomes = ['Edu', 'Maria', 'Joana', 'Luiza', 'Fabio'];
nomes[2] = 'Jão';
delete nomes[2]; //deleta um elemento mas mantém os índices
console.log(nomes);

console.log('==============valor por referência==================')
//valor por referencia:
const outrosNomes = nomes;
outrosNomes.pop(); //remove o ultimo elemento
outrosNomes.shift(); //remove o primeiro elemento (mudando o índice)
console.log(nomes); //mesmo mexendo no novo array, o array referenciado também é 'afetado';

console.log('================rest operator/spread================')
//com o rest operator [...] é possivel fazer essa referencia mas evitando que as mudanças num array afetem o array original:
const outrosOutrosNomes = [...nomes];
outrosOutrosNomes.push('Oswaldo'); //acrescenta no final
outrosOutrosNomes.unshift('Sousa'); //acrescenta no inicio
console.log(outrosOutrosNomes);
console.log(nomes); //nao foi afetado pela mudança acima

console.log('=====================slice========================')
//índices          0         1         2       3       4
const names = ['Fatima', 'George', 'Irineu', 'Ari', 'Julio'];
const novo = names.slice(1,3); //o ultimo indice informado n entra no corte
console.log(novo); //[ 'George', 'Irineu' ]
const novo2 = names.slice(0, -1) //indices negativos removem do final ao inicio
console.log(novo2);

console.log('========array para string e vice-versa============')
const arr = 'Uma string qualquer com espaços';
const strArr = arr.split(" "); //retorna um array com as palavras em cada índice
console.log(strArr); 
const arrStr = strArr.join(" "); //junta os elementos de um array os separando pelo parametro informado
console.log(arrStr);