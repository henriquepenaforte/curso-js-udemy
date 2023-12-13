function recursiva(max) {
    console.log(max);
    if (max > 10) return;
    max++;
    recursiva(max); //função se chamando ao final de sua funcionalidade;
}

recursiva(0);

//a engine do node tem um determinado limite de recursividade. No caso de uma repetição exagerada ou até mesmo de um loop, o sistema pausa a funcionalidade da função por detectar essa repetição como um erro.