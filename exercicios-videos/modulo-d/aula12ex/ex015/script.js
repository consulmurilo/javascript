function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            document.body.style.background = '#3d648f'
            if (idade >= 0 && idade < 10) {
                //kid
                img.setAttribute('src', 'imagens/bebe-m.jpg')
            } else if (idade < 21) {
                //teen
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            } else if (idade < 50) {
                //adult
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-m.jpg')
            }
        } else {
            genero = 'Mulher'
            document.body.style.background = '#c29694'
            if (idade >= 0 && idade < 10) {
                //kid
                img.setAttribute('src', 'imagens/bebe-f.jpg')
            } else if (idade < 21) {
                //teen
                img.setAttribute('src', 'imagens/jovem-f.jpg')
            } else if (idade < 50) {
                //adult
                img.setAttribute('src', 'imagens/adulto-f.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-f.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}