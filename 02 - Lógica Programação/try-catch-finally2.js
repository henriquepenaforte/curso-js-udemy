function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        console.log('Nao é')
        throw new TypeError('Esperando instancia de Date');
    }

    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });

}

const hora = retornaHora();
console.log(hora);
