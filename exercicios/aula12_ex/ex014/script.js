function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 11
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = '#fde67e'
    }else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#ce8857'
    }else{
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#0f3a5c'
    }
}
