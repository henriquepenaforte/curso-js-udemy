function IMC () {
    let peso = document.querySelector('#peso').value;
    let altura = document.querySelector('#altura').value;
    let res = document.querySelector('#res');
        if (peso == 0 || altura == 0) {
            alert("Peso ou altura inválidos")
        } else if (altura > 2.5) {
            alert("Lembre-se de colocar a altura em metros!")
        } else {
            let imc = Number(peso)/Number(altura) ** 2;
            imc.toFixed(2);
            res.innerHTML = `<p>IMC = ${imc}</p>`
            res.style.backgroundColor = ""
            switch (imc) {
                case imc < 18.5: 
                res.innerHTML += `<p> (Abaixo do Peso)</p>`
                break
                case imc < 25:
                res.innerHTML += `<p> (Peso Normal)</p>`
                break
                case imc < 30:
                res.innerHTML += `<p> (Sobrepeso)</p>`
                break
                case imc < 35:
                res.innerHTML += `<p> (Obesidade grau 1)</p>`
                break
                case imc < 40:
                res.innerHTML += `<p> (Obesidade grau 2)</p>`
                break
                case imc >= 40:
                res.innerHTML += `<p> (Obesidade grau 3)</p>`
                break
                default:
                alert('Valores inválidos')
            }
        }
}