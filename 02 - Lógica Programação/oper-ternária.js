// ? :      substitui um if else simplificando o código;

let pontuacaoUsuario = 999;

/*
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário Normal');
} */


//                                condicao    valor p/ true    valor p/ false
let nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

console.log(nivelUsuario);

let corUsuario;
let corPadrao = corUsuario || 'black';

console.log(nivelUsuario, corPadrao);