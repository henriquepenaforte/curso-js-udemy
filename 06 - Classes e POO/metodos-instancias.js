function teste () {
    console.log('Isso é um teste')
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }
    //metodos de instancia (padrao):
    aumentarVol () {
        this.volume += 2;
    }
    diminuirVol () {
        this.volume -= 2;
    }

    //metodo estático
    static trocaPilha() {
        console.log('Ok, pilhas trocadas');
        console.log(this.tv) //undefined
    }
    //o metodo estático é um método da propria classe, que nao é acessado pelos filhos e nem tem acesso às propriedades da propria classe
}

const c1 = new ControleRemoto('LG'); //ao utilizar o new aqui, a funcao teste vai ser chamada instantaneamente por está dentro da class
c1.aumentarVol();
c1.aumentarVol();
console.log(c1);
//c1.trocaPilha(); dá erro pois esse método é estático, da propria classe
ControleRemoto.trocaPilha();

//exemplo de método estática já utilizado anteriormente:
console.log(Math.random())