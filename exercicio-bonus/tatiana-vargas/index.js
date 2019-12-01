function carregar(){

    let msg = document.querySelector('#msg');
    let img = document.querySelector('#fotoDoDia');
    let data = new Date();
    //let hora = data.getHours();

    let hora = 22    

    msg.innerHTML = `Agora são ${hora} horas `

    if(hora >= 0 && hora < 12){
        img.src = './img/bom-dia.jpg';
        document.body.style.backgroundColor = '#CDAA7D';
    } else if (hora >= 12 && hora < 18){
        img.src = './img/boa-tarde.jpg';
        document.body.style.backgroundColor = '#EE7600';
    } else {
        img.src = './img/boa-noite.jpg';
        document.body.style.backgroundColor = '#2F4F4F';
    }
}