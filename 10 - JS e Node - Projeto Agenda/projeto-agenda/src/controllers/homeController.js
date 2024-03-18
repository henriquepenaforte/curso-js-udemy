//O trabalho do controller é decidir qual view e qual model irá ser utilizado para cada rota 

const Contato = require('../models/contatoModel');

exports.index = async (req, res) => {
    const contato = new Contato(req.params);
    const contatos = await contato.buscaContatos();
    //const contatos = await Contato.buscaContatos();
    res.render('index', { contatos });
};


