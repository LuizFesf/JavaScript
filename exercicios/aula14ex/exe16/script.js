function contar()
{
    var inicio = document.getElementById("num1")
    var fim = document.getElementById("num2")
    var passo = document.getElementById("num3")
    var res = document.getElementById("res")

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
    {
       res.innerHTML = 'Não foi possível contar. Revise os dados'
    }
    else
    {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0)
        {
            alert('O passo inserido é inválido. Considerando Passo: 1!')
            p = 1
        }
        
        if(i < f)
        {
            for(var cont = i; cont <= f; cont += p)
            {
                res.innerHTML += `${cont} \u{1F449} `
            } 
        }

        else
        {
            for(var cont = i; cont >= f; cont -= p)
            {
                res.innerHTML += `${cont} \u{1F449} `
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}