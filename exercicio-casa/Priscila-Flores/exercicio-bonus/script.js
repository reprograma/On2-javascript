function horarioDoDia(){

    let mensagem = document.querySelector('#mensagemDeHorario');
    let imagem = document.querySelector('#fotoDeHorario');
    let dia = new Date();
    let hora = dia.getHours();

    mensagem.innerHTML = `Horário de Berlim: ${hora} horas.`
    if(hora >= 0 && hora < 12){
        imagem.src = './img/bom-dia.jpg';
        document.body.style.backgroundColor = '#d8b104';
    } else if (hora >= 12 && hora < 18){
        imagem.src = './img/boa-tarde.jpg';
        document.body.style.backgroundColor = '#7cd2fa';
    } else {
        imagem.src = './img/boa-noite.jpg';
        document.body.style.backgroundColor = '#2d20a5';
    }
}