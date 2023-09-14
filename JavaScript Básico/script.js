function escopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('#iresumo');
    const pessoas = [];


    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('#inome');
        const sobrenome = form.querySelector('#isobrenome');
        const peso = form.querySelector('#ipeso');
        const altura = form.querySelector('#ialtura');
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        })

        console.log(pessoas)

        resultado.innerHTML += `<p><strong>${nome.value} ${sobrenome.value}, ${peso.value}kg, ${altura.value}cm</strong></p>`
    }

    form.addEventListener('submit', recebeEventoForm);

}
 escopo();