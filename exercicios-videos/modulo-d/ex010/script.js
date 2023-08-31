var btn = document.querySelector('#botao')

btn.addEventListener('click', calcular)

function calcular() {
    var txtv = document.querySelector('#txtvel')
    var vel = Number(txtv.value)
    var res = document.querySelector('#res')

    res.innerHTML = `<p>Você estava a <strong>${vel} Km/h</strong>.</p>`

    if (vel > 60) {
        res.innerHTML += `<p>Sua velocidade estava acima do permitido. Você foi <strong>multado</strong>.</p>`
    } else {
        res.innerHTML += `<p>Você estava dentro da velocidade permitida.</p>`
    }

    res.innerHTML += `<p><strong>Dirija sempre usando cinto de segurança!</strong></p>`
}