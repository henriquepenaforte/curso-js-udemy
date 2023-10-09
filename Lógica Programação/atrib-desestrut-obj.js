//lembrando: para objetos, as var locais definem com dois pontos e se separam com virgulas;

const pessoa = {
    nome: 'Joao',
    sobrenome: 'Silva',
    idade:  '30',
    endereco: {
        rua: 'Palmácia',
        numero: 320,
    }
};

const nome = pessoa.nome; //atribuição normal;
console.log(nome); 

//atribuição via desestruturação. Mas nesse caso, como o nome da const criada é o mesmo nome da propriedade presente no objeto, o valor já é atribuido direto, sem precisar "procurar" por índice como no caso dos arrays.
const {sobrenome, idade} = pessoa; 
console.log(sobrenome, idade);
const {tipoSanguineo = 'Não informado'} = pessoa; //nesse caso, já está com um valor preset, caso não exista a variavel de mesmo nome dentro do objeto atribuido, esta const recebe o valor presetadd;
console.log(tipoSanguineo);

//caso a variavel que queremos atribuir nao tenha o mesmo nome da variavel dentro do objeto, basta usar os dois pontos seguidos do novo nome de variavel:
const {nome: teste} = pessoa;
console.log(teste); //retorna "Joao"

//agora selecionando o objeto dentro de um objeto (no caso do objeto 'pessoa', existe um outro objeto = 'endereço'):
const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero);

//lembrando que tbm dá para presetar valores:
const {endereco : {bairro = 'Nao informado'}} = pessoa;
console.log(bairro);

//também é possivel pegar o restante das propriedades com o operador rest (...) :
const {nome: xablau, ...restante} = pessoa;
console.log(restante);



