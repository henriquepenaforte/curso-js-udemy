exports.middlewareGlobal = (req, res, next) => {
    if (req.body.nomeCliente) {
        req.body.nomeCliente = req.body.nomeCliente.replace('xablau', 'SAI DAE XABLAU');
        console.log();
        console.log(`Vimos que vc postou ${req.body.nomeCliente}`);
        console.log();
    }
    next();
}

exports.outroMiddleware = (req, res, next) => {
    //console.log('Sou seu outro middleware');
    next();
}