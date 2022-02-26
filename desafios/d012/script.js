function verificar()
{
    var oldp = Number(window.prompt("Qual era o preço anterior do produto?"))
    var newp = Number(window.prompt("Qual é o preço atual do produto?"))
    var res = document.getElementById("res")

    res.innerHTML = ("<h2>Analisando os valores informados</h2>")
    res.innerHTML += (`<p>O produto custava ${oldp.toLocaleString("pt-BR", {style: 'currency', currency: "BRL"})} e agora custa ${newp.toLocaleString("pt-BR", {style: 'currency', currency: "BRL"})}.</p>`)

    if(newp > oldp)
    {
        var aum = newp - oldp
        var per = (newp - oldp) / oldp * 100

        res.innerHTML += ("<p>Hoje o produto está mais caro.</p>")
        res.innerHTML += (`<p>O preço subiu ${aum.toLocaleString("pt-BR", {style: 'currency', currency: "BRL"})} em relação ao preço anterior.</p>`)
        res.innerHTML += (`<p>Uma variação de ${per.toLocaleString("pt-BR")}% pra cima.</p>`)
    }
    else
    {
        var caiu = oldp - newp
        var per = (oldp - newp) / oldp * 100

        res.innerHTML += (`<p>Hoje o produto está mais barato.</p>`)
        res.innerHTML += (`O preço caiu ${caiu.toLocaleString("pt-BR", {style: 'currency', currency: "BRL"})} em relação ao preço anterior.`)
        res.innerHTML += (`<p>Uma variação de ${per.toLocaleString("pt-BR")}% pra baixo.</p>`)
    }

}