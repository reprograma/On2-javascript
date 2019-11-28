let d = new Date();
let hora = d.getHours ();
let min = d.getMinutes();
let mensagem = "placeholder";  

function setar_mensagem(){
    // SETUP DE HORA E MENSAGEM
    
    if(hora < 6 || hora > 23){
        mensagem = "Ei! Você deveria estar dormindo! São " + hora + ":" +min + ". Até logo mais!." ;
    }else if (hora < 11){
        mensagem = "Bom dia, Treinador ! Agora são  "+ hora +":"+ min;
    }else if (hora < 14){
        mensagem = "Não esqueça de repor as energias :) Agora são  "+ hora +":"+ min + ". Tenha um bom almoço!" ;
    }else if (hora < 18){
        mensagem = "Mexa-se ! Hora de pegar novos Pokémons :) Agora são  "+ hora +":"+ min + "." ;
    }else if (hora < 21){
        mensagem = "Hora de dar uma parada e jantar. Agora são  "+ hora +":"+ min + ". Não esqueça de alimentar seus companheiros.";
    }else if (hora < 23){
        mensagem = "Hora de dormir e se preparar para um novo dia!  "+ hora +":"+ min + ". Boa noite !." ;
    }
}

function mostrar(){
    let criar = document.createElement('p');
    setar_mensagem();
    criar.innerHTML = mensagem
    document.getElementById('card_titulo').appendChild(criar);
    }
    