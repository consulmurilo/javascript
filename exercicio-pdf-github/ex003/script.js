var btn = document.querySelector('#botao')

btn.addEventListener('click', clicou)

function clicou() {
    var nome = window.prompt('Qual é o seu nome?')
    window.alert(`Olá, ${nome}! É um prazer te conhecer!`)
}