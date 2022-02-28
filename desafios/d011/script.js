function verificar()
{
    var ano = Number(window.prompt("Qual é o ano que você quer verificar?"))
    var res = document.getElementById("res")
    res.innerHTML = (`<h2>Analisando o ano de ${ano}</h2>`)

    if(ano % 4 == 0)
    {
        res.innerHTML += (`<p>O ano de ${ano} <mark style="color: green; background-color: rgba(4, 192, 4, 0.288);"><strong>É BISSEXTO</strong></mark>\u{2705}</p>`)
    }
    else
    {
        res.innerHTML += (`<p>O ano de ${ano} <mark style="color: crimson; background-color: rgba(255, 0, 0, 0.450);"><strong>NÃO É BISSEXTO</strong></mark>\u{274C}</p>`)
    }
}