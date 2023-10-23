let data = new Date();
let hora = document.querySelector('#hora');
let diaSemanaTexto;
let mesTexto;

function diaParaTexto () {
    let diaSemana = data.getDay();
    switch (diaSemana) {
        case 0:
        diaSemanaTexto = 'Domingo'
        break
        case 1:
        diaSemanaTexto = 'Segunda-feira'
        break
        case 2:
        diaSemanaTexto = 'Terça-feira'
        break
        case 3:
        diaSemanaTexto = 'Quarta-feira'
        break
        case 4:
        diaSemanaTexto = 'Quinta-feira'
        break
        case 5:
        diaSemanaTexto = 'Sexta-feira'
        break
        case 6:
        diaSemanaTexto = 'Sábado'
        break
        default:
        diaSemanaTexto = 'ERRO DATA'
    }
}

function mesParaTexto () {
    let mes = data.getMonth();
    switch (mes) {
        case 0:
            mesTexto = 'Janeiro';
        break
        case 1:
            mesTexto = 'Fevereiro';
        break
        case 2:
            mesTexto = 'Março';
        break
        case 3:
            mesTexto = 'Abril';
        break
        case 4:
            mesTexto = 'Maio';
        break
        case 5:
            mesTexto = 'Junho';
        break
        case 6:
            mesTexto = 'Julho';
        break
        case 7:
            mesTexto = 'Agosto';
        break
        case 8:
            mesTexto = 'Setembro';
        break
        case 9:
            mesTexto = 'Outubro';
        break
        case 10:
            mesTexto = 'Novembro';
        break
        case 11:
            mesTexto = 'Dezembro';
        break
        default:
            mesTexto = 'ERRO DATA'
    }
}

diaParaTexto();
mesParaTexto();

function zeroAEsquerda (n) {
    return n >=10 ? n : `0${n}`
}

function montaData () {
    let dia = zeroAEsquerda(data.getDate());
    let ano = data.getFullYear();
    let hor = zeroAEsquerda(data.getHours());
    let min = zeroAEsquerda(data.getMinutes());

    return `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} ${hor}:${min}`
}

hora.innerHTML = montaData();