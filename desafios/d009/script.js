function reajustar()
    {
        var funcionário = window.prompt("Qual é o nome do funcionário?")
        var salário = Number(window.prompt(`Qual é o salário ${funcionário}?`))
        var percentual = Number(window.prompt(`O salário de ${funcionário} vai ser reajustado em qual porcentagem?`))
        var reajuste = percentual / 100
        reajuste = reajuste * salário
        salárioFinal = reajuste + salário 
        var res = document.getElementById('res')

        res.style.fontSize = "17px";
        res.innerHTML = (`<h2>${funcionário} recebeu um aumento salarial!</h2>`)
        res.innerHTML += (`<p>O salário atual era  ${salário.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`)
        res.innerHTML +=(`<p>Com aumento de ${percentual}%, o salário vai aumentar ${reajuste.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no próximo mês.</p>`) 
        res.innerHTML += (`<p>E a partir daí, ${funcionário} vai passar a ganhar ${salárioFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`)
    }