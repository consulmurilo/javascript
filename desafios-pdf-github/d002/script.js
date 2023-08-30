var btn = document.querySelector('#botao')

btn.addEventListener('click', clicou)

function clicou() {
    nome = prompt('Qual seu nome?')
    idade = prompt(`Olá ${nome}! Quantos anos você tem?`)
    alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`)
}