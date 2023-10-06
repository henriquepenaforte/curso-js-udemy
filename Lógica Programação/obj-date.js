const data1 = new Date(); //funcao construtora que cria uma data baseada no dia e hora atual;

console.log(data1.toString());

const data = new Date('2023-10-06 11:04:45'); //da para passar por parametro uma data em string para a funçao, assim fixando o dia e a hora

console.log(data.toString());
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); //meses começam do 0 até 11
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia Semana', data.getDay() + 1) //dias da semanas começam do 0 até 6

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData (data1) {
    let dia = zeroAEsquerda(data1.getDate());
    let mes = zeroAEsquerda(data1.getMonth()+1);
    let ano = data1.getFullYear();
    let hora = zeroAEsquerda(data1.getHours());
    let min = zeroAEsquerda(data1.getMinutes());
    let seg = zeroAEsquerda(data1.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

let dataBrasil = formataData(data1);
console.log(dataBrasil);