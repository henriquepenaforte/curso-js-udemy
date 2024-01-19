// 705.484.450-52     070.987.720-03

export default class ValidadorCPF {
    constructor(cpfEnviado) {
        this.cpf = cpfEnviado
    }
    get cpfLimpo () {
        return this.cpf.replace(/\D+/g, '')
    }
    
    valida() {
        if (typeof this.cpfLimpo !== 'string' || typeof this.cpfLimpo === 'undefined') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequencia()) return false;

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);

        const novoCpf = cpfParcial + digito1 + digito2
        return novoCpf === this.cpfLimpo;
    } 
    criaDigito (cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((acum, valor) => {
            acum += (regressivo * Number(valor))
            regressivo--;
            return acum;
        }, 0);

        const digito = 11 - (total % 11)
        return digito > 9 ? '0' : String(digito)
    }
    isSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
        return sequencia === this.cpfLimpo
    }
}

const cpf = new ValidadorCPF('705.484.450-52');
console.log(cpf.valida());
console.log('AOOOOO POTENCIAA')