const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    if (req.session.user) return res.render('login-logado');
    res.render('login');
}

exports.register =  async (req, res) => {
    const login = new Login(req.body);
    try {
        await login.register();
        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(() => {
                return res.redirect('/login/index');
            });
            return;
        } else {
            req.flash('success', 'Usuário criado com sucesso');
            req.session.save(() => {
                return res.redirect('/login/index');
            });
        }
    } catch (e) {
        res.render('404')
        console.log(e);
    };
};

exports.login =  async (req, res) => {
    const login = new Login(req.body);
    try {
        await login.login();
        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(() => {
                return res.redirect('/login/index');
            });
            return;
        } else {
            req.flash('success', 'Login efetuado com sucesso!');
            req.session.user = login.user;
            req.session.save(() => {
                return res.redirect('/login/index');
            });
        }
    } catch (e) {
        res.render('404')
        console.log(e);
    };
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}