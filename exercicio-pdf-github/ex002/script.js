var btn = document.querySelector('#botao')

btn.addEventListener('click', clicou)
btn.addEventListener('mouseout', sair)

function clicou() {
    btn.innerText = 'Clicou!'
}

function sair() {
    btn.innerText = 'Clica em mim!'
}