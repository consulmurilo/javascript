var btn = document.querySelector('#botao')

btn.addEventListener('click', clicou)

function clicou() {
    var cotacao = prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')

    var valor = prompt('Quantos R$ você tem na carteira?')

    var conversao = valor / cotacao

    var resconv = conversao.toFixed(2)

    var res = document.querySelector('#parag').innerText = `Você terá US$${resconv} doláres.`
}