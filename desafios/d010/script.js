function calcular()
{
    var a = Number(window.prompt("Qual é o valor de a?"))
    var b = Number(window.prompt("Qual é o valor de b?"))
    var c = Number(window.prompt("Qual é o valor de c?"))
    var del = 'Δ'
    var d = b**2 - 4 * a * c
    var res = document.getElementById("res")

    res.innerHTML = ("<h2>Resolvendo Bhaskara</h2>")
    res.innerHTML += (`<p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></p>`)
    res.innerHTML += (`<p>O cálculo realizado será <strong>${del} = ${b}² - 4 . ${a} . ${c}</strong></p>`)
    res.innerHTML += (`<p>O valor calculado foi <strong><mark>${del} = ${d}</mark></strong></p>`)
}