function rand (min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.round(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('BAD VALUE'); 
                return;
            }
        resolve(msg.toUpperCase() + ' - Passei na promise')
        }, tempo);
    })
};

async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
        const fase3 = await esperaAi(3, rand());
        console.log(fase3);
        console.log('Terminou na fase:', fase3)
    } catch (e) {
        console.log(e)
    }
}

executa();
