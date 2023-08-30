var btn = document.querySelector('#botao')

btn.addEventListener('click', clicou)

function clicou() {
    var produto = prompt('Qual é o produto que você está comprando?')
    var preco = prompt(`Qual é o preco de ${produto}?`).replace('.', ',')

    var precoconv = preco.replace(',', '.')

    var desconto = precoconv * 10 / 100
    
    var total = precoconv - desconto

    var desc = desconto.toFixed(2).replace('.', ',')
    var tot = total.toFixed(2).replace('.', ',')

    var res = document.querySelector('#parag').innerHTML = `<h1>Calculando desconto de 10% para ${produto}</h1>
    O preço original era R$ ${preco}.<br>
    Você acaba de ganhar R$ ${desc} de desconto (-10%).<br>
    No fim, você vai pagar R$ ${tot} no ${produto}.`
}