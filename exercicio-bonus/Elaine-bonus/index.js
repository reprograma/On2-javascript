function showTime() {
    let time = new Date();
    let hora = time.getHours();
    let min = time.getMinutes();
    let seg = time.getSeconds();
    if(hora<10) hour = "0"+hora;
    if(min<10) min = "0"+min;
    if(seg<10) seg = "0"+seg; 
    
    let tempo = hora+":"+min+":"+seg;
    document.getElementById("timer").innerHTML=`Agora são ${tempo} horas.`;  
    if(tempo >= 0 && tempo < 12){
      img = 'img/bom-dia.jpg';
      document.body.style.backgroundColor = '#bb9679';
  } else if (tempo >= 12 && tempo < 18){
      img = 'img/boa-tarde.jpg';
      document.body.style.backgroundColor = '#3333bd';
  } else {
      img = 'img/boa-noite.jpg';
      document.body.style.backgroundColor = '#000000ad';
  }

    }

    function initTime(){
      setInterval(showTime, 1000);
     
    }
    
    