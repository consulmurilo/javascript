var btn = document.querySelector('#botao')

btn.addEventListener('click', clicou)

function clicou() {
    var pais = document.querySelector('#pais')
    var p = pais.value
    var res = document.querySelector('#res')

    if (p == 'Brasil') {
        res.innerHTML = `<p>Você é <strong>Brasileiro</strong></p>`
    } else {
        res.innerHTML = `<p>Você é <strong>Estrangeiro</strong></p>`
    }
}