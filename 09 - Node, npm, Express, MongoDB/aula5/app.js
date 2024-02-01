const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '.',  'teste.json');
const escreve = require('./modules/escrever');
const le = require('./modules/ler');

/* const pessoas = [
    { nome: 'João'},
    { nome: 'Maria'},
    { nome: 'Joaquina'},
    { nome: 'Jão'},
]

const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json); */

async function leArquivo(caminho) {
    const dados = await le(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);

    dados.forEach(value => {
        console.log(value.nome)
    });
}

leArquivo(caminhoArquivo);
