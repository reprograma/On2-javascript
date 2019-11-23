let button = document.querySelector('#button');
let paragrafo = document.querySelector('#paragrafo');


// button.addEventListener("click", function(event){
//     paragrafo.classList.toggle("buttonHide");
// })

paragrafo.addEventListener("mouseover", function(event){
    paragrafo.classList.toggle("buttonColor");

})

//  Aqui utilizamos o addEventListener um escutador, do click ou mouseover entre outros que executa uma ação ao html