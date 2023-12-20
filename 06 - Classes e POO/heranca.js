class DispositivoEletronico {
    constructor (nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já ligado(a)`)
            return; 
        } 
        this.ligado = true;
    }
    
    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já desligado(a)`)
            return; 
        } 
        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('televisão');
console.log(d1);
d1.desligar();

class Smartphone extends DispositivoEletronico { //extends faz a classe herdar tudo da class pai
    constructor(nome, cor, modelo) { //
        super(nome); //esse super é para selecionar/chamar o constructor da classe pai
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('iphone', 'preto', '11 pro');
console.log(s1);

//pode-se também criar uma outra class extendendo a smartphone para ficar cada vez mais específica, aumentando a cadeia hierárquica. 
//herança até é utilizada mas é bom evitar criar uma cadeia muito extensa (max 2, 3)

class Tablet extends DispositivoEletronico {
    constructor (nome, cor, modelo) {
        super (nome)
        this.cor = cor;
        this.modelo = modelo;
    }

    tiraFoto () { //metodo proprio, o pai não tem acesso
        console.log('Foto tirada')
    }
}

const t1 = new Tablet('samsung', 'prata', 'note 12');
console.log(t1);
//d1.tiraFoto(); //dá erro, a class DispositivoEletronico nao tem o método especifico do filho

//em resumo, as classes filhos herdam da classe pai, mas a classe pai não herda nada das classes filhos. Assim com a classe irmao nao herda de outro irmao
