function calcular()
    {
        var pro = window.prompt("Qual é o produto que você está comprando?")
        var pre = Number(window.prompt(`Qual é o valor de ${pro}?`))
        des = pre * 0.1
        prf = pre - des
        var res = document.getElementById('res')

        res.style.fontSize = "17px";
        res.innerHTML = (`<h2>Calculando desconto de 10% para ${pro}</h2>`)
        res.innerHTML += (`<p>O preço original era  ${pre.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`)
        res.innerHTML += (`<p>Você acaba de ganhar ${des.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de desconto (-10%).</p>`) 
        res.innerHTML += (`<p>No fim, você vai pagar ${prf.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no produto ${pro}.`)
    }