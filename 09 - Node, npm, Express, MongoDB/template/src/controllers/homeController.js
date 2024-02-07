//O trabalho do controller é decidir qual view e qual model irá ser utilizado para cada rota 

exports.paginaInicial = (req, res) => {
    //exemplos de flash messages:
    /* req.flash('info', 'Olá mundo!');
    req.flash('error', 'dsdasdasads');
    req.flash('success', 'lero lero lero'); */
    //console.log(req.flash('error'), req.flash('info'), req.flash('success'));
    res.render('index', {
        titulo: `Este será o <span style="color:red;">título</span> da página`,
        numeros: [0,1,2,3,4,5,6,7,8,9],
    });
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}