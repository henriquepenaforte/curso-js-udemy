exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor de uma variavel local'
    next();
}

exports.outroMiddleware = (req, res, next) => {
    //console.log('Sou seu outro middleware');
    next();
}