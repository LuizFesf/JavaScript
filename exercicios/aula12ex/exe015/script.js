function verificar()
{
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById("res")

   if(fano.value.length == 0 || Number(fano.value) > ano)
   {
       window.alert('[ERRO] Verifique os dados e tente novamente!')
   }
   else
   {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gen = ''
       var pro = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if(fsex[0].checked)
       {
           gen = 'homem'
           if(idade >= 0 && idade <= 10)
           {
                img.setAttribute('src', 'foto_bebe_homem.png')
           }
           else if(idade < 23 )
           {
            img.setAttribute('src', 'foto_jovem_homem.png')
           }
           else if(idade < 50)
           {
            img.setAttribute('src', 'foto_adulto.png')
           }
           else
           {
            img.setAttribute('src', 'foto_idoso.png')
           }
       }
       else if(fsex[1].checked)
       {
            gen = 'mulher'
            if(idade >= 0 && idade <= 10)
           {
            img.setAttribute('src', 'foto_bebe_mulher.png')
           }
           else if(idade < 23 )
           {
            img.setAttribute('src', 'foto_jovem_mulher.png')
           }
           else if(idade < 50)
           {
            img.setAttribute('src', 'foto_adulta.png')
           }
           else
           {
            img.setAttribute('src', 'foto_idosa.png')
           }
       }

       if(fsex[0].checked)
       {
           pro = 'um'
       }
       else if(fsex[1].checked)
       {
            pro = 'uma'
       }

       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${pro} ${gen} com ${idade} anos.`
       res.appendChild(img)
   }
}