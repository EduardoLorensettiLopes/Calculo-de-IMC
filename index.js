const buttonActivate = document.getElementById("calc")



function calcularIMC(altura, peso) {
    const valueAltura = parseFloat(altura)
    const valuePeso = parseFloat(peso)

    const imc = valuePeso / (valueAltura * valueAltura).toFixed(2)

    if (isNaN(valueAltura) || isNaN(valuePeso) || valueAltura <= 0 || valuePeso <= 0) {
        return "Altura e peso devem ser números positivos.";
    }

    else if (imc < 18.5) {
        return result.innerHTML = `Seu IMC é ${imc.toFixed(2)} você esta abaixo do peso`
    }
    else if (imc < 24.9) {
        return result.innerHTML = `Seu IMC é ${imc.toFixed(2)} você esta no peso ideal (parabéns)`
    }
    else if (imc < 29.9) {
        return result.innerHTML = `Seu IMC é ${imc.toFixed(2)} Levemente acima do peso`
    }
    else if (imc < 34.9) {
        return result.innerHTML = `Seu IMC é ${imc.toFixed(2)} Você está na Obesidade grau I`
    }
    else if (imc < 39.9) {
        return result.innerHTML = `Seu IMC é ${imc.toFixed(2)} Você está na Obesidade grau II (severa)`
    }
    else {
        return result.innerHTML = `Seu IMC é ${imc.toFixed(2)} Você está na Obesidade grau III (mórbida)`
    } 
}

buttonActivate.addEventListener("click", function () {
    const altura = document.getElementById("inp-altura").value
    const peso = document.getElementById("inp-peso").value
    const result = document.getElementById("result")


    const imcResult = calcularIMC(altura, peso)



    result.innerHTML = imcResult
})