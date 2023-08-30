var btn = document.querySelector('#botao')

btn.addEventListener('click', clicou)

function clicou() {
    var a = prompt('Qual é o valor de a?')
    var b = prompt('Qual é o valor de b?')
    var c = prompt('Qual é o valor de c?')

    var delta = b * b - 4 * a * c

    document.querySelector('#parag').innerHTML = `A equação atual é <b>${a}x² + ${b}x + ${c} = 0</b><br>
    O cálculo realizado será <b>∆ = ${b}² - 4 . ${a} . ${c}</b><br>
    O valor calculado foi <span style='background-color: yellow'><b>∆ = ${delta}</b></span>`
}

// var calculo = (-b + (b * b - 4 * a * c)) / (2 * a)