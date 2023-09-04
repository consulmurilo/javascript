var first = document.querySelector('#primeiro')
var last = document.querySelector( '#ultimo')
var jump = document.querySelector('#passo')
var btn = document.querySelector('#botao')
var parag = document.querySelector('#parag')

btn.addEventListener('click', function(event) {
    if (first.value.length == 0 || last.value.length == 0 || jump.value.length == 0) {
        parag.innerHTML = 'Impossível contar!'
        alert('Por favor, preencha com os números!')
    } else {
        parag.innerHTML = 'Contando: <br>'

        var primeiro = Number(first.value)
        var ultimo = Number(last.value)
        var passo = Number(jump.value)

        if (passo <= 0) {
            alert('Passo inválido! Considerando passo 1')
            passo = 1
        }

        if (primeiro < ultimo) {
            for (var contador = primeiro; contador <= ultimo; contador += passo) {
                parag.innerHTML += ` ${contador} \u{1F449}`
            }
        } else {
            for (var contador = primeiro; contador >= ultimo; contador -= passo) {
                parag.innerHTML += ` ${contador} \u{1F449}`
            }
        }
        
        parag.innerHTML += `\u{1F3C1}`
    }
})