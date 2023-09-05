console.log(`Meu nome é "Henrique". Estou aprendendo JS às`,10,`horas da manha`); //este é um comentário simples, comentários maiores usa-se "/*"

/* strings podem ser com aspas simples, duplas ou com crases. Na dúvida, usa crase, ainda mais quando tiver usando dois ou mais tipos de dados (strings, numbers, objects, etc.) */

//alert("de nuevo")

let nome = "XablauVar"
console.log(`Este é o famoso`,nome,`sim, ele mesmo`);

let sobrenome; //variavel declarada
console.log(sobrenome);
sobrenome = "da Silva"; //iniciação de variável já declarada
console.log(nome,sobrenome,`famoooso`);

//let sobrenome -> redeclarar variável não é possivel, gera um erro.

//var é antigo, melhor usar let.

/*Não se pode nomear variáveis com palavras reservadas, como if, else, let, var, const, etc. Também nao se pode começar o nome de uma variável com números e nem possuir espaços entre as palavras. Por fim, usar nomes significativos para facilitar o uso.*/

/*Variáveis são case sensitive, ou seja, letras maisculas e minisculas são diferenciadas. Por convenção, usa-se camelCase, ou seja, inicia-se o nome da variável com letra minúscula e se houver outras palavras, estas começam com maiúsculas. Logo: nomeDaVariavel. */

const dado = "Marcado";
//dado = "Mercado"; constantes não podem ter seus valores mudados.

let palavra = dado; //também é possivel dar valor para uma variável com outra variável
console.log(palavra);

let num1 = 2;
let num2 = 5;
console.log(num1+num2)

//incremento => ++
//decremento => --
//incremento aritmético => +=, -=, *=, /=, **=

let passo = 3;
num1 += passo; 
console.log(num1);

//conversão de string em number
let numero = "5"
let numer = 10
console.log(numero + numer) //retorna uma concatenação
numero = Number("5") /*parseInt() transforma em numero inteiro e parseFloat() transforma em numero real. Ou ainda, apenas Number() que tranforma do jeito que tá. */
console.log(typeof numero); //retorna number

//alert, confirm e prompt 
/*
        alert('Xabs') //alerta algo para o usuário. Retorna undefined
        confirm('Desejas continuar?') //pede uma confirmação pro usuário. Retorna boolean - true or false
        prompt("Como vota deputado?") //pede um input de texto para o usuário. Retorna uma string
*/

//É possivel guardar esses retornos em uma função

const confirma = confirm("Aceitas?")
console.log(confirma)

if (confirma == true) {
    alert("Tendi po")
}

//até dá para fazer contas básicas com essas janelas

const numero1 = prompt("Digite o primeiro numero");
const numero2 = prompt("Digite o segundo número");
let somaPrompt = Number(numero1) + Number(numero2)
alert(`A soma dos dois números é ${somaPrompt}`)


