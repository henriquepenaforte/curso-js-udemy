for (let c = 0; c <=10; c++) {
    let par = c % 2 === 0 ? 'Par' : 'ímpar';
    console.log(c, par);
}

const frutas = ['maçâ', 'pera', 'uva', 'banana', 'limao', 'laranja'];
for (let i = 0; i < frutas.length; i++) {
    console.log(`índice ${i}, ${frutas[i]}`);
}