var dol = window.prompt('Antes de mais nada. Quanto  está a cotação do dólar agora?')

function converter()
    {
        var real = Number(window.prompt("Quantos R$ você tem na carteira?"))
        var res = document.getElementById('res')
        var dolar = real / dol

        res.style.fontSize = "17px";
        res.innerHTML = `<p>Com ${real.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} você conseguirá comprar ${dolar.toLocaleString("en-US", {style:"currency", currency:"USD"})}</p>`
    }