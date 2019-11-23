// // ID
let paragrafo2 = document.getElementById('paragrafoId');
paragrafo2.style.color="pink";

// // CLASS
//Retorna uma Coleção. E sempre terá que fazer a conversão para Array.
let paragrafoOne = document.getElementsByClassName('paragrafoClass');

let result = Array.from(paragrafoOne);

for(let i = 0; i < result.length; i++){
    console.log(result[i])
    result[i].style.color="red";
}

// // TAG 
// Retorna uma Coleção. E sempre terá que fazer a conversão para Array.
let paragrafoOne = document.getElementsByTagName('p');
console.log(paragrafoOne)

let result = Array.from(paragrafoOne);


for(let i = 0; i < result.length; i++){
    console.log(result[i])
    result[i].style.color="orange";
}

//QuerySelector()
// Em questão de semântica é a melhor opção e ele roduz o código.
let paragrafo2 = document.querySelector('.paragrafoClass')
paragrafo2.style.color="pink";

let paragrafoTwo = document.querySelector('#paragrafoId')
console.log(paragrafoTwo)
paragrafoTwo.style.color="orange";

let paragrafoTwo = document.querySelector('p')
console.log(paragrafoTwo)
paragrafoTwo.style.color="orange";

// QuerySelectorAll() sempre retorna um Coleção. E sempre será necessario realizar a converter para uma array.
let paragrafoTwo = document.querySelectorAll('p')
console.log(paragrafoTwo)
paragrafoTwo.style.color="orange";
