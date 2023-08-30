var btn = document.querySelector('#botao')

btn.addEventListener('click', clicou)

function clicou() {
    var nome = window.prompt('Qual é o seu nome?')
    var res = document.querySelector('#resultado')
    res.innerHTML = `<p>Olá, <strong>${nome}</strong>! É um grande prazer te conhecer!`
}