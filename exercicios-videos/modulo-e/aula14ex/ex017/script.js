var num = document.querySelector('#innum')
var btn = document.querySelector('#botao')
var tab = document.querySelector('#seltab')

btn.addEventListener('click', function (event) {
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var numero = Number(num.value)
        tab.innerHTML = ''
        for(var mult = 1;mult <= 10;mult++){
            var resultado = numero * mult
            var item = document.createElement('option')
            item.text = `${numero} x ${mult} = ${resultado}`
            tab.appendChild(item)
        }
    }
})
