// 705.484.450-52     070.987.720-03
//a validação de um cpf se dá por dois cálculos em cima dos 9 primeiros dígitos que irão 'bater' com os dois últimos

/* 
7x 0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2  (regressao de 10)
70  0  40 28 48 20 16 15 0     = 237 (total da soma das multiplicações)

formula do dígito: 11 - (237 % 11) = 5 (primeiro dígito)
*se o resultado dessa formula for maior que 9, considera 0;

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x (acrescentando o digito encontrado anteriormente)
11 10  9  8  7  6  5  4  3  2 (regressão de 11)
77  0 45 32 56 24 20 20  0 10  = 284

formula do dígito: 11 - (284 % 11) = 2 (segundo dígito)
*se o resultado dessa formula for maior que 9, considera 0;

ao concatenar os 9 primeiros dígitos com os dois gerados pelo cálculo, se o resultado final bater com o cpf inicial, o mesmo se é um cpf válido:
                705.484.450-52 === 705.484.450-52
*/

class validaCPF {
    constructor(cpfEnviado) {
        this.cpfLimpo = cpfEnviado.replace(/\D+/g, '')
    }
    valida () {
        if (typeof this.cpfLimpo !== 'string' || typeof this.cpfLimpo === 'undefined') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequencia()) return false;

        const cpf9 = this.cpfLimpo.slice(0, -2)
        const digito1 = this.criaDigito(cpf9);
        const digito2 = this.criaDigito(cpf9 + digito1);
        
        const cpfValido = cpf9 + digito1 + digito2;
        return cpfValido === this.cpfLimpo;
    }
    criaDigito (cpf9) {
        let cpfArray = Array.from(cpf9);
        let multiplicador = cpfArray.length + 1;
        let total = cpfArray.reduce(function(acum,valor) {
            acum += valor * multiplicador;
            multiplicador--
            return acum;
        },0);

        const digito = 11 - (total % 11);
        return digito > 9 ? 0 : String(digito)
    }
    isSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }
}

const cpf = new validaCPF('070.987.720-03')
console.log(cpf.valida());

let c = '070.987.720-03'
let cpfLimpo = c.replace(/\D+/g, '')
console.log(Array.from(cpfLimpo));
