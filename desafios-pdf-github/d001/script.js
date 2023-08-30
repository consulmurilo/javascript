var btn1 = document.querySelector('#botao1')
var btn2 = document.querySelector('#botao2')
var btn3 = document.querySelector('#botao3')

btn1.addEventListener('click', clicou1)
btn2.addEventListener('click', clicou2)
btn3.addEventListener('click', clicou3)


function clicou1() {
    alert(`Você clicou no botão 1!`)
}

function clicou2() {
    alert(`Você clicou no botão 2!`)
}

function clicou3() {
    alert(`Você clicou no botão 3!`)
}