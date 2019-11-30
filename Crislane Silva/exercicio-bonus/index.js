function carregar(){

    let msg = document.querySelector('#msg');
    let img = document.querySelector('#fotoDoDia');
    let data = new Date();
    let hora = data.getHours();

    //let hora = 11

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        img.src = './img/bom-dia.jpg';
        document.body.style.backgroundColor = '#EBC79E';
    }else if (hora >= 12 && hora < 18){
        img.src = './img/boa-tarde.jpg';
        document.body.style.backgroundColor = '#3299CC';
    }else {
        img.src = './img/boa-noite.jpg';
        document.body.style.backgroundColor = '#000000'
    }
}