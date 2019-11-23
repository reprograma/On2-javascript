let  lista = document.getElementById('minhaLista');
let itens = document.getElementsByClassName('item');

function minhaFuncao(){
    lista.removeChild(itens[0]);
}

// Aqui conseguimos remover o primeiro item da lista, utilizando o removeChild