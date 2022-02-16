function carregar()
{
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //var hora = 0

    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12)
    {
        img.src = 'foto_manha.png'
        document.body.style.background = '#e2b6d8'
    }
    else if(hora >= 12 && hora <= 18)
    {
        img.src = "foto_tarde.png"
        document.body.style.background = '#ffb16c'
    }
    else
    {
        img.src = 'foto_noite.png'
        document.body.style.background = '#616f84'
    }
}
