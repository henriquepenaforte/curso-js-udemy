// IIFE -> Immediately invoked function expression;
// funções anonimas que sao chamadas automaticamente e facilitam na proteção das variáveis

/* funçao clássica:
function qualquerCoisa() {
    console.log(11211212);
}
qualquerCoisa();
*/

//exemplo de iife:

(function() {
    const nome = 'João'
    console.log(nome)
})();


(function (idade, peso, altura){
    const sobrenome = 'Silva'

    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(criaNome('Robson'))
    }

    falaNome();
    console.log(`${idade} anos, ${peso}kg e ${altura}m`)

})(20, 100, 1.80);