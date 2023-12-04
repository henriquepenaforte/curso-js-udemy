// function criaCalculadora () {
//     return {
//         display: document.querySelector('.display'),
//         calc: document.querySelector('#calculadora'),



//         //padrao de objeto: primeiros todas as propriedades e depois todos os métodos.
//         inicia() {
//             this.cliqueBotoes();
//             this.pressionaEnter();
//         },

//         realizaConta() {
//             let conta = this.display.value;
//             try {
//                 conta = eval(conta);
//                 if (!conta) {
//                     alert('Conta inválida');
//                     return;
//                 }
//                 this.display.value = conta;
//             } catch (erro) {
//                 alert('Conta Inválida');
//                 return;
//             }
//         },

//         cliqueBotoes() {
//             document.addEventListener('click', (e) => {
//                 let elem = e.target;
//                 if (elem.classList.contains('btn-num')) {
//                     this.btnParaDisplay(elem.innerText);
//                 } else if (elem.classList.contains('btn-clear')) {
//                     this.clearDisplay();
//                 } else if (elem.classList.contains('btn-del')) {
//                     this.apagaUm();
//                 } else if (elem.classList.contains('btn-eq')) {
//                     this.realizaConta();
//                 }
//             });
//         },

//         pressionaEnter() {
//             this.display.addEventListener('keyup', (e) => {
//                 if (e.keyCode === 13) {
//                     this.realizaConta()
//                 }
//             })
//         },

//         btnParaDisplay(valor) {
//             this.display.value += valor;
//         },

//         clearDisplay() {
//             this.display.value = '';
//         },

//         apagaUm() {
//             this.display.value = this.display.value.slice(0,-1);
//         }
//     };
// }

//quando uma função dentro de um objeto chama outra função, é necessário utilizar o .bind para linkar essas funções sem perder o this. Uma alternativa é utilizar arrow function no lugar da função anonima no eventListener para já linkar sem ser necessário o bind().

function Calculadora () {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.realizaConta = () => {
        let conta = this.display.value;
        try {
            conta = eval(conta);
            if (!conta) {
                alert('Conta inválida');
                return;
            } 
            this.display.value = conta;
        } catch (erro) {
            alert('Conta inválida');
            return;
        }
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => {
            let el = e.target;
            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            } else if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            } else if (el.classList.contains('btn-del')) {
                this.apagaUm();
            } else if (el.classList.contains('btn-eq')) {
                this.realizaConta();
            }
        })
    }

    this.btnParaDisplay = (valor) => {
        this.display.value += valor
        this.display.focus();
    }

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        })
    };

}


const calculadora = new Calculadora;
calculadora.inicia();