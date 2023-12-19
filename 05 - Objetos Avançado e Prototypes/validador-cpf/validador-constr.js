function ValidadorCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
}

ValidadorCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2
    return novoCpf === this.cpfLimpo;
    ;
}

ValidadorCPF.prototype.criaDigito = function (cpfParcial) {
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

ValidadorCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}
const cpf = new ValidadorCPF('070.987.720-03');
console.log(cpf.valida());

//outra condição de validação de cpf nao dita anteriormente:
//cpf com valores repetidos: ex: 111.111.111-11, 222.222.222-22 etc