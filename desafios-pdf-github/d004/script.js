var btn = document.querySelector('#botao')

btn.addEventListener('click', clicou)

function clicou() {
    var prod = prompt('Que produto você está comprando?')
    var preco = prompt(`Quanto custa o ${prod} que você está comprando?`)
    var pago = prompt(`Qual foi o valor que você deu para pagar o ${prod}?`)
    var troco = pago - preco

    alert(`Você comprou um ${prod} que custou ${preco}.
Deu ${pago} em dinheiro e vai receber ${troco} de troco.
Volte sempre!`)
}