// O objetivo do exercício é o seguinte: criar uma "lista de tarefas" para organizar e priorizar tarefas. Tem como objetivo exercitar os conhecimento adquiridos em HTML, CSS, Javascript e lógica.

let itemLista  = document.getElementById('lista');
let botaoAdd = document.getElementById('btnTarefa');
let textoItem = document.getElementById('textoItem');
let botaoRemove = document.getElementById('btnExcluir');

botaoAdd.addEventListener('click', function(){
    let criarItem = document.createElement('li');
    criarItem.innerText = textoItem.value;
    itemLista.appendChild(criarItem);
});

botaoRemove.addEventListener('click', function(){
    
})





// let document_ = {
//     getElementById: function(id){
//         console.log('Eu sou uma funcção', id);
//     },
//     body: {
//         appendChild: function(element){
//             console.log('Eu sou um elemento', element)
//         }
//     }

//  }

//  let itemLista_  = document_.getElementById('lista');
// document_.body.appendChild(document.createElement('p'));