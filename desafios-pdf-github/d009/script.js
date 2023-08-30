var btn = document.querySelector('#botao')

btn.addEventListener('click', clicou)

function clicou() {
    var nome = prompt('Qual é o nome do funcionário?')

    var salario = Number(prompt(`Qual é o salário de ${nome}?`).replace(',', '.'))

    var reajuste = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    
    var ajustecalc = salario * reajuste / 100

    var total = ajustecalc + salario

    document.querySelector('#parag').innerHTML = `<h1>${nome} recebeu um aumento salarial!</h1>
    O salário atual era ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.<br>
    Com um aumento de ${reajuste}%, o salário vai aumentar ${ajustecalc.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no próximo mês.<br>
    E a partir daí, ${nome} vai passar a ganhar ${total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`
}

