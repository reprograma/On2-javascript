let form = document.getElementById('formulario');
let entrada = document.getElementById('entrada');
let tarefas = document.getElementById('tarefas');
let selecionar = document.getElementById('selecionar');
let excluir = document.getElementById('excluir');

form.addEventListener('submit', function (evento) {
   
    evento.preventDefault()

    vazioEntrada = entrada.value.trim()

    if (vazioEntrada == '') {
        alert('Digite uma terefa valida')
    } else { }

    let diVazia = document.createElement('div');
    let lista = document.createElement('p');
    let deletar = document.createElement('span');

    diVazia.className = 'divTarefas';
    lista.innerHTML = (entrada.value);
    deletar.innerText = 'x';

    deletar.style.cursor = 'pointer';

    lista.classList = 'tarefas';

    
    tarefas.appendChild(diVazia);
    diVazia.appendChild(lista);
    diVazia.appendChild(deletar);

    lista.addEventListener('click', function (p) {
        if (lista.className == 'checado') {
            lista.classList.remove('checado')
        } else {
            lista.className = 'checado'
        }
    })


    deletar.addEventListener('click', function (span) {
        diVazia.parentNode.removeChild(diVazia)
    })

    entrada.value = ""

    
    selecionar.addEventListener('click', function () { 

     
        if (!lista.classList.contains('checado')) {
            lista.className = 'checado'
            selecionar.innerHTML = 'Desmarcar Tarefas'
        } else {
            lista.classList.remove('checado')
            selecionar.innerHTML = 'Selecionar Tarefas'
        }

    })

    excluir.addEventListener('click', function () {
        lista.parentNode.remove(lista)
    })
}) 