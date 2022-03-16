function loadHours() {
    const message = document.getElementById('message')
    const image = document.getElementById('imagem')
    let date = new Date()
    const hora = (date.toLocaleTimeString('pt-BR', 
    { 
        hour: '2-digit', 
        minute: '2-digit' 
    }));

    message.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        image.src = 'foto.manha.png'
        document.body.style.background = '#c3b39a'
    } else if (hora >= 12 && hora <= 18) {
        image.src = 'foto.tarde.png'
        document.body.style.background = '#d7b178'
    } else {
        image.src = 'foto.noite.png'
        document.body.style.background = '#3373ad'
    }
} 