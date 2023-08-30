var btn = document.querySelector('#botao')

btn.addEventListener('click', clicou)

function clicou() {
    var valor = prompt('Digite uma distância em metros(m)').replace(',', '.')

    var res = document.querySelector('#parag').innerText = `A distância de ${valor} metros, corresponde a...
    ${valor/1000} quilômetros (Km) 
    ${valor*100} centímetros (cm) 
    ${valor*1000} milímetros (mm)`
}
