//Ex 03: manipulação de strings:
//Dado a string "JavaScript é incrivel", escreva o codigo que mostre quantos caracteres a string tem e quantas palavras existem na frase.

const frase = "JavaScript é incrivel mesmo hein?"

const numCaracteres = frase.length
const numPalavras = frase.split(" ").length;
//console.log(`a frase '${frase}' possui ${numCaracteres} caracteres e possui ${numPalavras} palavras`);

//Ex 04: repetição com array
//crie um array com cinco nomes e use crie um codigo que mostre os cinco nomes

const pessoas = ['Fabio', 'Lucas', 'José', 'Ricardo', 'Ana'];
for (i in pessoas) {
    //console.log(pessoas[i])
}

//Ex 05: funções, strings, math
//Crie uma função que aceita string representando um horario de 24 horas (ex: "14:30"). Essa função deve converter e retornar esse horario de 12 horas (ex: 2:30 pm). Use math para auxiliar e tome cuidado com os horários de meio dia e meia noite.

function converterHorario(hora) {
    const [horas, minutos] = hora.split(":");

    console.log(horas, minutos)
}

converterHorario('23:43')