function carregar() {

    let msg = document.querySelector('#msg');
    let img = document.querySelector('#fotoDoDia');
    let data = new Date();
    let recado = ""
    // let hora = data.getHours();

    let hora = 15

    msg.innerHTML = `São ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = './img/bom-dia.jpg';
        document.body.style.backgroundColor = '#bb9679';
        recado = "Aproveite bem seu dia!";
        
    } else if (hora >= 12 && hora < 18) {
        img.src = './img/boa-tarde.jpg';
        document.body.style.backgroundColor = '#F4A460';
        recado ="O dia passou voando, mas não deixe o estresse do dia te afetar";

    } else {
        img.src = './img/boa-noite.jpg';
        document.body.style.backgroundColor = '#000f1f';
        recado = "Hora de retonar a sua casa, boa sorte no trânsito"
    }
}