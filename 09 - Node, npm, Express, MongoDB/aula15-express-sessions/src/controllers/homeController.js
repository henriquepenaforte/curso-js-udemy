exports.paginaInicial = (req, res) => {
    /* req.flash('info', 'Olá mundo!');
    req.flash('error', 'dsdasdasads');
    req.flash('success', 'lero lero lero'); */
    console.log(req.flash('error'), req.flash('info'), req.flash('success'));
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}