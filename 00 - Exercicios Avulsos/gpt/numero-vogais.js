function numVogais (frase) {
    if (typeof frase !== 'string') {
        return console.log('Frase/palavra inválida')
    }
    
    let vogais = 0;
    let letras = frase.toLowerCase().split("");
    for (i of letras) {
        if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i ==='u') {
            vogais++
        }
    }
    return console.log(`O número de vogais é ${vogais}`)
}

numVogais('So loucura');
numVogais('aeiouaeiou');
numVogais('Oswaldo');
numVogais(1221);