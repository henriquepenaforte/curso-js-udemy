function IMC () {
    let peso = document.querySelector('#peso').value;
    let altura = document.querySelector('#altura').value;
    let res = document.querySelector('#res');
        if (peso == 0 || altura == 0) {
            alert("Peso ou altura inválidos")
        } else if (altura > 2.5) {
            alert("Lembre-se de colocar a altura em metros!")
        } else {
            let imc = (Number(peso)/Number(altura) ** 2);
            imc = Number(imc.toFixed(1));
            res.innerHTML = `<p>IMC = ${imc}</p>`
            res.style.backgroundColor = "rgba(255, 136, 0, 0.685)"
                if (imc < 18.5) {
                    res.innerHTML += `<p> (Abaixo do Peso)</p>`
                } else if (imc < 25) {
                    res.innerHTML += `<p> (Peso Normal)</p>`
                    res.style.backgroundColor = "rgba(0, 255, 34, 0.596)";
                } else if (imc < 30) {
                    res.innerHTML += `<p> (Sobrepeso)</p>`
                } else if (imc < 35) {
                    res.innerHTML += `<p> (Obesidade grau 1)</p>`
                } else if (imc < 40) {
                    res.innerHTML += `<p> (Obesidade grau 2)</p>`
                } else if (imc >= 40) {
                    res.innerHTML += `<p> (Obesidade grau 3)</p>`
                } else {
                    alert('Valores inválidos')
                }
            }
}
