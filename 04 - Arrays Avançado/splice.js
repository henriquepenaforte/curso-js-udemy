//           -5        -4        -3        -2      -1   índices negativos
//            0         1         2         3       4
const m = ['Maria', 'Mareia', 'Maranhao', 'Mar', 'Minha'];

//o metodo splice serve para remover ou alocar algum elemento (ou vários) informando a partir de qual indice, quantos elementos irá ser realocado:
//m.splice(indice, delete, elem1, elem2, elem3);

const elemSplice = m.splice(3,2); //a partir do indice 3, remove 2 elementos
console.log(m); // [ 'Maria', 'Mareia', 'Maranhao' ];
console.log(elemSplice); // [ 'Mar', 'Minha' ]

const n = ['nariz', 'navio', 'Nazaré', 'noz', 'Noronha'];
const removidos = n.splice(-2,3);
console.log(removidos); //[ 'noz', 'Noronha' ]

//se quiser por exemplo, pegar todos os elementos de um array gigantesco a partir do splice, dá para passar no parametro o Number.MAX_VALUE, para ter ctz que todos os elementos foram selecionados (ou então usar um numero enorme como parametro que seja maior que o numero de elementos):
const numeros = [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100];
const numRemovidos = numeros.splice(-6, Number.MAX_VALUE);
console.log(numRemovidos); //retorna os ultimos 6 elementos independente do tamanho do array.

//também é possivel adicionar elementos utilizando o splice para indicar aonde será inserido:
const numComAdicao = numeros.splice(6, 0, 'Henrique'); //usando o 0 no segundo parametro, não é removida nenhum elemento, mas a partir do 6º indice, será adicionado o elemento informado: (vale ressaltar que o elemento que a constante numComAdicao é uma array vazio já que não foi recortado nenhum elemento)
console.log(numeros, numComAdicao);

//ou entao dá para trocar elementos seguindo a mesma lógica
const numComAdicao2 = numeros.splice(8, 3, 'Oswaldo');
console.log(numeros, numComAdicao2);