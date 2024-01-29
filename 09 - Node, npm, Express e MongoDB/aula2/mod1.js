module.exports = function (x,y) { //funciona como um export default, nesse caso, precisando utilizar module.
    return x * y;
}

//ressaltando a diferença na exportação de modulos, a vantagem de ter uma exportação default é que dá para utilizar qualquer outra nomenclatura, sem precisar usar o mesmo nome do material/variavel do modulo. Em contrapartida, só é possível existir um export default por módulo.