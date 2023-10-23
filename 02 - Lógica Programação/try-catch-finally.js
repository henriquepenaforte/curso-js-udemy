try {
    //executa quando nao há erros
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    // console.log(a); //var n existe
    console.log('Fechei o arquivo'); //nao vai ser exec

    try {
        console.log(b);
    } catch {
        console.log('Deu erro');
    } finally {
        console.log('Outro finally');
    }


} catch(e) {
    //executa quando há erros
    console.log('Tratando o erro');
} finally {
    //sempre executa
    console.log('FINALLY: Sou sempre executado');
}