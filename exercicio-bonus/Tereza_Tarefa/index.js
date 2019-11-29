let d = new Date();
let hora = d.getHours ();
let min = d.getMinutes();
let mensagem = "";  
let foto = "";
let musica = "";

function setar_mensagem(){
    // SETUP MENSAGEM E IMAGEM
    
    if(hora < 6 || hora > 23){
        mensagem = "Ei! Você deveria estar dormindo! São " + hora + ":" + min + ". Até logo mais!." ;
        foto = 'img/boa-noite-2.jpg';
        document.body.style.backgroundColor = '#ffa64d';
        musica = 'img/noite.mp3'
    }else if (hora < 11){
        mensagem = "Bom dia, Treinador ! Agora são  "+ hora +":"+ min;
        foto = 'img/bom-dia-pikachu.jpg';
        document.body.style.backgroundColor = '#ffd633';
        musica = 'img/Bom_dia.mp3'
    }else if (hora < 14){
        mensagem = "Não esqueça de repor as energias :) Agora são  "+ hora +":"+ min + ". Tenha um bom almoço!" ;
        foto = 'img/pokefome.jpg';
        document.body.style.backgroundColor = '#ff471a';
        musica = 'img/Bom_dia.mp3'
    }else if (hora < 18){
        mensagem = "Mexa-se ! Hora de pegar novos Pokémons :) Agora são  "+ hora +":"+ min + "." ;
        foto = 'img/training.jpg';
        document.body.style.backgroundColor = '#e64d00';
        musica = 'img/Treino.mp3'
    }else if (hora < 21){
        mensagem = "Hora de dar uma parada e jantar. Agora são  "+ hora +":"+ min + ". Não esqueça de alimentar seus companheiros.";
        foto = 'img/good-vibes-snorlax.jpg';
        document.body.style.backgroundColor = '#602020';
        musica = 'img/102-palette town theme.mp3'
    }else if (hora < 23){
        mensagem = "Hora de dormir e se preparar para um novo dia! Agora são "+ hora +":"+ min + ". Boa noite !" ;
        foto = 'img/mareep.jpg';
        musica = 'img/noite.mp3'
        document.body.style.backgroundColor = '#805500';
    }
}

function mostrar(){
    let criar = document.createElement('h1');
    let img = document.querySelector('#fotopkm');
    let music = document.querySelector('#music');


    setar_mensagem();

    criar.innerHTML = mensagem
    img.src = foto;
    music.src = musica;

    document.getElementById('card_titulo').appendChild(criar);
    }
    