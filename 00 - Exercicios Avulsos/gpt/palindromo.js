/* const prosa = "tenet";

function palindromo(frase) {
    const p = frase.trim();
    let ePalindromo;

    if (p.length === 3 && (p.charAt(0) === p.charAt(2))) {
        ePalindromo = "É palindromo"
    } else if (p.charAt(0) === p.charAt(p.length-1) && p.charAt(1) === p.charAt(p.length-2)) {
        ePalindromo = "É palindromo"
    } else {
        ePalindromo = "Não é palindromo/palavra inválida"
    }

    return console.log(ePalindromo);
}  

palindromo('acerola');
palindromo('omissíssimo');
*/

//parece falho, outro método:

function palindromo (frase) {
    if (typeof frase !== 'string') {
        return console.log('Não é um texto/Texto inválido')
    }
    let semEspacos = frase.trim().toLowerCase();
    let split = semEspacos.split("");
    let inverso = split.reverse().join(""); //join precisa do parametro para juntar o array numa string. Se nao colocar as aspas, a string vem com as vírgulas;
    if (inverso === semEspacos) {
        console.log("É palindromo")
    } else {
        console.log("Não é palindromo")
    }
}

palindromo('ovo');
palindromo('omississimo'); //ainda precisaria retirar os acentos por meio de funções regulares.
palindromo(13213);