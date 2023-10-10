/* função que retorne:
Numero divisivel por 3 = Fizz;
Numero divisivel por 5 = Buzz;
Numero divisivel por 3 e 5 = FizzBuzz;
Numero não divisivel nem por 3 e nem por 5 = proprio numero;
Checar se o numero é realmente um número
Use a função com numeros de 0 a 100
*/

function FizzBuzz(n) {
    if (typeof n !== "number") {
        return 'Não é um número'
    } else if (n % 3 == 0 && n % 5 == 0) {
        return 'FizzBuzz'
    } else if (n % 3 == 0) {
        return 'Fizz'
    } else if (n % 5 == 0) {
        return 'Buzz'
    } else {
        return n
    }
}

for (let i = 0; i <= 100; i++) {
    console.log(i, FizzBuzz(i))
}