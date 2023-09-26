const calcular = document.getElementById('calcular')


function imc () {
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value
    const resultado = document.getElementById('resultado')


    if(peso != '' && altura != '') {

        const valorIMC = (peso / (altura * altura)).toFixed(2)
       

        let classificacao = ""

        if(valorIMC < 18.5) {
            classificacao = "abaixo do peso"
        }else if (valorIMC < 25) {
            classificacao = "com peso ideal"
        }else if(valorIMC < 30) {
            classificacao = "acima do peso"
        }else {
            classificacao = "com obesidade"
        }

        resultado.textContent = `Seu imc é ${valorIMC} e você está ${classificacao}!`

    }else {
       resultado.textContent = "Preencha todos os campos!"
    }

}

const modeIcon = document.getElementById('modeIcon')



modeIcon.addEventListener('click', () => {
    if(modeIcon.classList.contains('fa-moon')) {
        modeIcon.classList.remove('fa-moon')
        modeIcon.classList.add('fa-sun')

        modeTheme.classList.add('dark')

    }else {
        modeIcon.classList.add('fa-moon')
        modeIcon.classList.remove('fa-sun')

        modeTheme.classList.remove('dark')

    }

})





calcular.addEventListener('click', imc)