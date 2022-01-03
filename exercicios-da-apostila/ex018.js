function verificar(){
    
    var data_nasc = (document.getElementById('data_nasc')).value

    var ano_nasc = (data_nasc.substr(0,4))
    var mes_nasc = (data_nasc.substr(5,2))
    var dia_nasc = (data_nasc.substr(8,2))

    var ano_atual = 1572
    var ultimos_digitos = ano_atual
    var ultimos_digitos = String(ultimos_digitos)
    var ultimos_digitos = ultimos_digitos.substr(-2)
    var mes_atual = new Date().getMonth() + 1
    var dia_atual = new Date().getDate()

    var idade = ano_atual - ano_nasc

    var res = window.document.getElementById('res')

    if((ultimos_digitos === '00' && ano_atual % 400 == 0) ||    (ultimos_digitos != '00' && ano_atual % 4 == 0)){
        res.innerHTML = 'BISSEXTO'
    }else{
        res.innerHTML = 'NÃO BISSEXTO'
    }
}
