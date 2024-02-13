//Model configura tudo que é referente à dados e à base de dados

const mongoose = require('mongoose');
const validator = require('validator');

const LoginSchema = new mongoose.Schema({ //define os campos que irão ser enviados e estarão presente na base de dados, informando também o tipo de dado que será guardado no campo informado: 
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register() {
        this.valida();
        if (this.errors.length > 0) return;
        try {
            this.user = await LoginModel.create(this.body);
        } catch(e) {
            console.log(e);
        }
    }

    valida() {
        this.cleanUp();
        //validando se o email é valido (pacote validator)
        if (!validator.isEmail(this.body.email)) {
            this.errors.push('E-mail inválido')
        };
        //validando se a senha tem o numero min e max de caracteres
        if (this.body.password.length < 3 || this.body.password.length > 50) {
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres')
        };
        
    }

    cleanUp() {
        for (let key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        } 
        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }

}

module.exports = Login;