function carregar() {
    var mensagem = document.querySelector('.msg')
    var imagem = document.querySelector('#img')

    var data = new Date()
    var hora = data.getHours()

    mensagem.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora <12) {
        // BOM DIA
        imagem.src = 'imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        imagem.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE
        imagem.src = 'imagens/noite.jpg'
        document.body.style.background = '#515154'
    }

}