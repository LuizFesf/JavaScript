function verificar()
{
    var nome = window.prompt("Qual é o nome do aluno?")
    var not1 = Number(window.prompt(`Primeira nota de ${nome}:`))
    var not2 = Number(window.prompt(`Segunda nota de ${nome}:`))
    var res = document.getElementById("res")
    var med = (not1 + not2) / 2

    res.innerHTML = (`<h2>Analisando a situação de ${nome}</h2>`)
    res.innerHTML += (`<p>Com as notas ${not1.toLocaleString("pt-BR")} e ${not2.toLocaleString("pt-BR")}, a <strong>média é ${med.toLocaleString("pt-BR")}</strong></p>`)

    if(med < 3)
    {
        res.innerHTML += (`<p>Com média abaixo de 3,0, o aluno está <mark style="color: crimson; background-color: rgba(255, 0, 0, 0.450);"><strong>REPROVADO</strong></mark></p>`)
    }
    else if(med >= 3 && med <= 6)
    {
        res.innerHTML += (`<p>Com média entre 3,0 e 6,0, o aluno está em <mark style="color: rgb(204, 150, 0); background-color: rgba(255, 217, 0, 0.336);"><strong>RECUPERAÇÃO</strong></mark></p>`)
    }
    else
    {
        res.innerHTML += (`<p>Com média acima de 6,0, o aluno está <mark style="color: green; background-color: rgba(4, 192, 4, 0.288);"><strong>APROVADO</strong></mark></p>`)
    }
}