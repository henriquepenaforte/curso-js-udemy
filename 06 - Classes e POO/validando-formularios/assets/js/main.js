/* const nome = document.querySelector('#name');
const sobrenome = document.querySelector('#lastname');
const cpf = document.querySelector('#cpf');
const usuario = document.querySelector('#username');
const senha1 = document.querySelector('#password');
const senha2 = document.querySelector('#password2'); */

class validaFomulário {
    constructor() {
        this.formulario = document.querySelector('#form');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', (e) => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault(e);
        const camposValidos = this.validFields();
        const senhasValidas = this.validPasswords();

        if (camposValidos && senhasValidas) {
            alert('Formulario enviado.');
            this.formulario.submit();
        }
    }

    validPasswords() {
        let valid = true;
        
        const senha = this.formulario.querySelector('#password');
        const senha2 = this.formulario.querySelector('#password2');

        if (senha.value !== senha2.value) {
            this.criaErro(senha, 'Campos "senha" e "repita senha" precisam ser iguais');
            this.criaErro(senha2, 'Campos "senha" e "repita senha" precisam ser iguais')
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            this.criaErro(campo, 'Senha precisa conter entre 6 e 12 caracteres')
        }
    }

    validFields() {
        let valid = true;
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }
        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar em branco`)
                valid = false;
            }
            if (campo.id == 'cpf') {
                if (!this.validaCPF(campo)) valid = false;
            }
            if (campo.id == 'username') {
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }
    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
    validaCPF(campo) {
        const cpf = new ValidadorCPF(campo.value);
        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.');
            return false;
        }
        return true;
    }
    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;
        if (usuario.length > 12 || usuario.length < 3) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres');
            valid = false;
        }
        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou númeors')
        }
        return valid;
    }
}

const valida = new validaFomulário();

