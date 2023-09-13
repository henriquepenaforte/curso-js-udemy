function dados () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('#iresumo');
    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('#inome').value;
        const sobrenome = form.querySelector('#isobrenome').value;
        const peso = form.querySelector('#ipeso').value;
        const altura = form.querySelector('#ialtura').value;

        pessoas.push({
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura,
        })
    }
    
    form.addEventListener('submit', recebeEventoForm());
}

dados();

