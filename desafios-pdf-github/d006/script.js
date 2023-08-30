var btn = document.querySelector('#botao')

btn.addEventListener('click', clicou)

function clicou() {
    var c1 = prompt('Digite uma temperatura em °C (Celsius)').replace(',', '.')
    var c = Number(c1)

    var f = (c * 9/5) + 32
    var k = c + 273

    var res = document.querySelector('#parag').innerText = `A temperatura de ${c}°C, corresponde a...
    ${k}°K (Kelvin)
    ${f}°F (Fahrenheit)`
}