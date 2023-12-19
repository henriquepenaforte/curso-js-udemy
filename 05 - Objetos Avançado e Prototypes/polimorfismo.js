//Superclass: classe base para outras
function Conta (agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.saque = function (valor) {
    if (this.saldo < valor) {
        console.log('Saldo insuficiente')
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo(); 
};

Conta.prototype.deposito = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function () {
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} | ` + 
        `Saldo: R$${this.saldo.toFixed(2)}`
    );
};

function ContaCorrente(agencia, conta, saldo, limite) { //fazer a herança
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;

}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.saque = function (valor) {
    if ((this.saldo + this.limite) < valor) {
        console.log('Saldo insuficiente')
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo(); 
};

function ContaPoupanca(agencia, conta, saldo) { //fazer a herança
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;


const conta1 = new Conta('2301', '0001', 300);
conta1.verSaldo();
conta1.saque(200);

const cc1 = new ContaCorrente('2301', '0002', 100, 500);
cc1.saque(500);

const cp1 = new ContaPoupanca('2301', '0003', 1000);
cp1.saque(200);
cp1.saque(900);