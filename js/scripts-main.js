function carregar() {
    const msg = document.querySelector('div#msg')
    const img = document.querySelector('#imagem')
    const data = new Date()
    const hora = data.getHours() 
    const min = data.getMinutes()
    const seg = data.getSeconds() 
    const day = data.getDate() 
    const mes = data.getMonth()
    const ano = data.getFullYear()
    msg.innerHTML = `A hora é ${hora}:${min}:${seg} do Dia ${day} do Mês ${mes} de ${ano}`
    if (hora >= 0 && hora < 12){
        // Bom Dia 
        img.src = '/img/manhã.jpg'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora <= 18){
        //Boa Tarde
        img.src = '/img/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //Boa Noite
        img.src = '/img/noite.jpg'
        document.body.style.background = '#515154'
    }
} 
setInterval(carregar, 1)