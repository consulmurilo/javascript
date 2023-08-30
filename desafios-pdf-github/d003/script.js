var btn = document.querySelector('#botao')

btn.addEventListener('click', clicou)

function clicou() {
    var nmr = prompt('Digite um número inteiro qualquer')
    var ant = Number(nmr) - 1
    var sc = Number(nmr) + 1
    alert(`Antes de ${nmr}, temos o número ${ant}.
Depois de ${nmr}, temos o número ${sc}.`)
}