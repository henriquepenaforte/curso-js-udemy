exports.paginaInicial = (req, res) => {
    res.send(`<form action="/" method="POST">
    <label for='name'>Nome Comp Cliente:</label>
    <input type='text' id='name' name='nome'></input> <br>
    <p></p>
    <label for='outronome'>Outra coisa:</label>
    <input type='text' id='outronome' name='outrocampo'></input> <br>
    <p></p> 
    <button>Enviar Formulário</button>
    </form>`);
};

exports.trataPost = (req, res) => {
    res.send('Sou uma nova rota de POST')
}