// try e catch são blocos de codigo que só irao ser executados caso a condição dentro de try apresentar algum tipo de erro, imitando a estrutura do if else:

//throw serve para lançar no sistema o erro dentro de um bloco. Para aparecer a mensagem ou para funcionar o codigo dentro de throw é preciso usar o try e catch posteriormente.

try {
    console.log(naoExisto);
} catch(error) {
    console.log('naoExisto não existe');
}

function soma (x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.');
    }

    return x + y;
}

try {
    console.log(soma(1,2));
    console.log(soma('1',4));
} catch(error) {
    console.log(error);
}
