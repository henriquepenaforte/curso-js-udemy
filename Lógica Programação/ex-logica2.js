//função ePaisagem para receber dois parametros, altura e largura e que retorne true se a imagem tiver paisagem;

const ePaisagem = (alt, larg) => alt > larg ? false : true;

console.log(ePaisagem(3,4));