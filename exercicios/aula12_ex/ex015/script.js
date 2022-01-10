function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')


    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'menino.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'moco.png')
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src', 'adulto.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        }else if(fsex[1].checked){
            genero = 'Feminino'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'menina.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'moca.png')
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src', 'adulta.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.innerHTML = `Detectamos gênero ${genero} com ${idade} anos`
        res.style.textAlign = 'center'
        res.appendChild(img)

    }
}