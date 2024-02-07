exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor de uma variavel local'
    next();
}

exports.outroMiddleware = (req, res, next) => {
    //console.log('Sou seu outro middleware');
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err && 'EBADCSRFTOKEN' === err.code) {
        return res.render('404')
        //return res.render('../src/views/404')
    
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken;
    next();
}