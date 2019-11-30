# Javascript

Esse repositório, é parte do material complementar da aula de "Javascript" semana 5 da turma online 2. Aqui você vai encontrar todo material e conteúdo complementar dessa semana.

![Capa do Slide](./docs/assets/img/javascript.gif)

### Como linkar o **Javascript** no HTML

Quando criamos um arquivo js, devemos indicar no arquivo html em qual lugar está sendo puxado. Para isso usamos a tag `<script>`.

#### HTML - Modelo
 ```HTML
<script src="index.js"></script>
```

#### HTML - Posicionamento 
 ```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <!-- Sempre colocar a tag que carrega o javascript sempre antes do fechamento da tag body e final de todas as tags. -->
    <script src="./index.js"></script>
</body>
</html>
```
***
### Acesso de **Forma Rapida**

 * [Como linkar o Javascript no HTML](#Como-linkar-o-Javascript-no-HTML)



 * [Manipulando o DOM](#Manipulando-o-DOM)

 * [Métodos de manipulação - CSS](#Métodos-de-manipulação-CSS)

 * [Adicionar e Remover classes do HTML](#Adicionar-e-Remover-classes-do-HTML)

* [Eventos Click e Submit](#Eventos-Click-e-Submit)

* [Validações com condições](#Validações-com-condições)

* [Criar ou Adicionar elemento ao DOM](#Criar-ou-Adicionar-elemento-ao-DOM)

* [Array [ ] e Objeto { }](#Array-[-]-e-Objeto-{-})

* [Objeto Date](#Objeto-Date)

* [Cursos](#Cursos)

* [Sites com exercicos](#Sites-com-exercicosCursos)

* [Livros](#Livros)

* [Atalho VSCODE](#Atalho-VSCODE)





## DOM - Document Object Model 

### O que é DOM ?

DOM é uma sigla que significa **Document Object Model.** Quando a página é carregada o browser cria um objeto que representa os elementos da página a partir do **HTML.** A forma mais fácil de acessar e manipular o DOM é usando JavaScript. 

![Capa do Slide](./docs/assets/img/domhtml.gif)

 * Document - representa o documento HTML
 * Elements - são todas as tags que estão no arquivo HTML e se transformam em elementos da árvore DOM
 * Texts - é o conteúdo de texto que vai entre os elementos (tags).
 * Attributes - são os todos atributos para um nó específico. No caso, o attribute class="HERO" está associado ao elemento, outros exemplos de atributos são o href, o id, entre outros.


## Manipulando o DOM

O DOM tem duas funções: é a representação do objeto do documento HTML e atua como uma interface que conecta a página ao mundo externo, como o JavaScript. Por exemplo, quando você chama document.getElementById(), o elemento retornado é um nó DOM. Cada nó DOM tem muitas funções que você pode usar para acessá-lo e alterá-lo.

![Capa do Slide](./docs/assets/img/dom.gif)

## Métodos de manipulação - HTML/DOM

### getElementById()

Esse método retorna o elemento que estiver contendo o nome do ID passado. Como os IDs devem ser únicos, é um método muito útil para pegar apenas o elemento desejado.

 Exemplo:

#### HTML
 ```HTML
  <div>
    <input type="text" id="textInput" class="text-input"  />
</div>
```
#### Javascript

```js
    let getInputId = document.getElementById('textInput');
```
## Demais metodos

### getElementsByClassName()

Retorna uma coleção de todos elementos que estiverem contendo o nome da classe passada.

### getElementsByTagName() 

Uma coleção de todos elementos que contennham a tag name passada.


### querySelector()

Esse método retorna qualquer elemento do DOM, como classes, tags e ID's. Você precisa deixar explicito se está chamando uma classe, um ID ou uma tag.

 Exemplo:

#### HTML
 ```HTML
<div>
  <input type="text" id="textInput" class="text-input" />
</div>
```
#### Javascript

```js
let getInputId = document.querySelector('#textInput');
let getInputClass = document.querySelector('.text-input');
let getInputTag = document.querySelector('input');
```
## Demais metodos

### querySelectorAll()

Semelhante ao querySelector(), só que retorna todos os elementos que se equiparam ao seletor.

## **Importante**:

Vamos utilizar sempre os seletores de ID. No HTML as classes vão ser utilizadas para estilizar o CSS, e o ID vai ser utilizado para manipular o DOM pelo Javascript.

## Métodos de manipulação - CSS

Os estilos CSS encontrados em uma página da web são mapeados no CSSOM - **Modelo de Objeto CSS.** É muito parecido com o DOM, porém, mapeado para o CSS e não para o HTML. Diferente do DOM, ele não pode ser construído incrementalmente. Como as regras CSS podem se substituir, o mecanismo do navegador precisa fazer cálculos complexos para descobrir como o código CSS se aplica ao DOM.

![Imagem CSS](./docs/assets/img/cssdom.png)


### HTML

```HTML
<div>
    <p class="paragrafoClass">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p id="paragrafoId">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>
```

### Javascript

#### Class
```js
    let paragrafoThree = document.getElementsByClassName('paragrafoClass');
    paragrafoThree.style.color='red';
```
#### Id
```js
    let paragrafoOne = document.getElementById('paragrafoId');
    paragrafoOne.style.color="pink";
```
#### Tag
```js
    let paragrafoTwo = document.getElementsByTagName('p'); 

    let result = Array.from(paragrafoTwo)

    for(let i = 0; i < result.length; i++){
    result[i].style.color="blue";
}
```
## Links para se aprofundar

 [HTML DOM querySelector() - Documentação](https://www.w3schools.com/jsref/met_document_queryselector.asp)

 [JavaScript - querySelectorAll()](http://www.devfuria.com.br/javascript/dom-queryselectorall/)

 [JavaScript - getElementById()](http://www.devfuria.com.br/javascript/dom-getelementbyid/)

 [JavaScript - getElementsByClassName()](http://www.devfuria.com.br/javascript/dom-getelementsbyclassname/)

 [JavaScript - getElementsByTagName()](http://www.devfuria.com.br/javascript/dom-getelementsbytagname/)


## Adicionar e Remover classes do HTML

Para adicionar ou remover classes do HTML, utilizamos  o objeto `classList` que possui os seguintes métodos:

### HTML
```html
 <p id="paragrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime exercitationem nemo! Harum vitae cupiditate amet sunt. At esse facere facilis, excepturi dolorum debitis maiores, fuga cum, voluptas cupiditate eligendi.</p>
```
### CSS
```CSS
.styleOne{
    color: pink;
}

.styleTwo{
    color: red;
}
```
### Javascript
```js
let paragrafo = document.querySelector('#paragrafo');
```

Para **ADICIONAR** uma classe css no html, através do javascript utilizamos o método `add` do `classList`.
```js
paragrafo.classList.add("styleOne");
```

Para **REMOVER** uma classe css no html, através do javascript utilizamos o método `remove` do `classList`.
```js
paragrafo.classList.remove("styleOne");
```

Quando utilizamos o método `toggle`, conseguimos adicionar ou remover uma classe, ou seja, verifica se a classe está presente no html. Caso esteja ele remove a classe, caso não ele adiciona. 
```js
paragrafo.classList.toggle("styleTwo"); // Adicionar
paragrafo.classList.toggle("styleTwo"); // Remove
```
## Links para se aprofundar

 [Element.classList - Documentação](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList)

 [HTML DOM classList - Documentação](https://www.w3schools.com/jsref/prop_element_classlist.asp)

 [Adding, Removing & Toggling Classes With classList in JavaScript](https://alligator.io/js/classlist//)


## Eventos Click e Submit 

Os eventos são basicamente um conjunto de ações que são realizadas em um determinado elemento da página web, seja ele um texto, uma imagem, ou uma div, por exemplo. Muitas das interações do usuário que está visitando sua página com o conteúdo do seu site podem ser consideradas eventos.

![Imagem CSS](./docs/assets/img/cartao.gif)

## addEventListener()


### HTML
```html
<button type="button" id="button" >click</button>
    <p id="paragrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid minus nihil fuga illo officia quis natus corrupti obcaecati possimus sit. Modi distinctio neque tenetur dolor reiciendis nobis, ex in odio.</p>
    <script src="./index.js"></script>
```
### CSS
```CSS
.buttonHide{
    display: none;
}
```
### Javascript
```js
let button = document.querySelector('#button')
let paragrafo = document.querySelector('#paragrafo')
```

### Click #1
Dado que capturamos, o elemento button do html é possivel adicionar um escutador de evento através da função `addEventListener`.
Essa função espera dois argumentos como **parametros**, o primeiro é o nome do evento que será escutado, neste caso o `click`. O segundo uma função que será executada quando o evento acontecer. 

```js
button.addEventListener("click", function(event){
    paragrafo.classList.toggle("buttonHide");
});
```

### Click #2
Outra forma de adicionarmos um evento, é utilizando os atributos do HTML. Que sempre serão préfixados com `on` e logo após nome do evento.
Exemplo: `onclick`, `onmouseover`, `onsubmit`. 

### HTML
```html
    <button type="button" id="button" onclick="esconder()">click</button>
    <p id="paragrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid minus nihil fuga illo officia quis natus corrupti obcaecati possimus sit. Modi distinctio neque tenetur dolor reiciendis nobis, ex in odio.</p>
    <script src="./index.js"></script>
```

### Javascript
```js
let button = document.querySelector('#button')
let paragrafo = document.querySelector('#paragrafo')

function esconder(){
    paragrafo.classList.toggle('buttonHide')
}
```

## Submit #1
É um evento que acontece quando enviamos informações através de um formulario.

### HTML
```html
<form id="form">
        Enter name:
         <input type="text" name="fname" id="name">
        <input type="submit" value="Submit" id="button">
    </form>
```

### Javascript
```js
let input = document.querySelector("#name")
let form = document.querySelector("#form")

form.addEventListener("submit", function(event) {
	// event.preventDefault()
    // o prevenDefault ele vai remover o comportamento padrão de carregar a pagina após o submit
    let name = input.value
    alert(name)
})
```

## Submit #2

### HTML
```html
    <form id="form" onsubmit="mostrarNome()">
        Enter name:
         <input type="text" name="fname" id="name">
        <input type="submit" value="Submit" id="button">
    </form>
```

### Javascript
```js
let input = document.querySelector("#name")

function mostrarNome(){
    let name = input.value
    alert(name)
}
```
## Links para se aprofundar

 [The addEventListener()  - Documentação](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

 [ADDEVENTLISTENER E REMOVEEVENTLISTENER- JAVASCRIPT](https://bognarjunior.wordpress.com/2014/12/17/addeventlistener-e-removeeventlistener-javascript/)



## Validações com condições

Sendo o fomulario um bom exemplo de como utilizar condicionais para validar inputs do usuario, iremos utilizar como referencia:

### HTML
```html
  <form id="form">
    <label name="username">Username:</label>
    <input class="text-field" type="text" name="username">
    <label name="email">email:</label>
    <input class="text-field"  type="email" name="email">
    <label name="password">password:</label>
    <input class="text-field" type="password" name="password">
    <input class="button" type="submit" value="validate">
  </form>
```

### Javascript
```js
let form = document.querySelector("#form")

form.addEventListener("submit", function(event) {
  event.preventDefault();

  if(form.username.value.length === 0) {
    alert("Username não pode ser vazio")
  } 
  if(form.email.value.length === 0) {
    alert("Email não pode ser vazio")
  }
  if(form.password.value.length <= 8) {
    alert("Password deve ter no minimo 8 caracthers")
  }
})
```

## Criar ou Adicionar elemento ao DOM

Como o navegador está construindo o DOM, se ele encontrar uma `<script>...</script>` tag no HTML, deverá executá-lo imediatamente.
Os scripts podem alterar a estrutura do DOM adicionando nós como o `document.createElement()`.

![Imagem CSS](./docs/assets/img/docwrite.png)

### document.creatElement()

O método `document.createElement()`  cria o elemento HTML especificado.

#### appendChild()

### HTML
```html
<p>Click no botão para criar um elemento de tag P</p>
    <button onClick="minhaFuncao()">Adicionar</button>
```

### Javascript
```js
function minhaFuncao() {
    let criar = document.createElement("P");
    criar.innerText = "Este é um novo paragrafo.";
    document.body.appendChild(criar);
  }
```

Nesse exemplo vamos criar um elemento `P` dentro de uma `<div>`.

### HTML
```html
<p>Click no Botão para criar um elemento P, adicionando o mesmo dentro da DIV.</p>

<div id="minhaDIV"></div>

<button onclick="minhaFuncao()">Try it</button>
```

### Javascript
```js
function minhaFuncao() {
  var criar = document.createElement("P");
  criar.innerHTML = "Este é um novo paragrafo";
  document.getElementById("minhaDIV").appendChild(criar);
}
```
### removeChild()
Nesse exemplo vamos criar um elemento `<li>` de dentro de uma `<ul>`.
### HTML
```html
<ul id="minhaLista">
    <li>Café</li>
    <li>Chá</li>
    <li>Leite</li>
</ul>

<p>Clicar no botão, para remover o primeiro intem da lista.</p>

<button onclick="minhaFunction()">Remover</button>
```

### Javascript
```js
function minhaFuncao() {
  let list = document.getElementById("minhaLista");
  list.removeChild(list.childNodes[0]);
}
```

## Links para se aprofundar

 [Document.createElement() - Documentação](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement)

[HTML DOM createElement() ](https://www.w3schools.com/jsref/met_document_createelement.asp)

[JavaScript - Create Element (DOM)](http://www.devfuria.com.br/javascript/dom-create-element/)

[JavaScript - Append Child (DOM)](http://www.devfuria.com.br/javascript/dom-append-child/)

[JavaScript - Remove Child (DOM)](http://www.devfuria.com.br/javascript/dom-remove-child/)

# Array [ ] e Objeto { }

## Array [ ]

Array é um tipo de variável que engloba uma lista atributos. É um tipo especial de objeto que representa um conjunto ordenado de valores numerados.

### Javascript
```js
let sanduiches = ["Queijo", "Rosbife", "Vegetariano"];
```

Podendo acessar cada atributo, através da sua posisção do array.

### Javascript
```js
sanduiches[0]; // retorna a primeira posição do array "Queijo".

sanduiches.length; // retorna 3, a quantidade de atributos dentro do array.
```

**Observação :**
Em javascript as posições sempre inicam a contagem a partir do 0 (zero).

## Links para se aprofundar

 [Javascript Arrays](https://www.devmedia.com.br/javascript-arrays/4079)

[Array - Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)



## Objeto { }

Um objeto é uma coleção de dados e/ou funcionalidades relacionadas que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos.

### Javascript
```js
let pessoa = {
  nome: "Isabela",
  idade: 27,
  falar: function() { 
    console.log(`oi eu sou a ${this.nome}`) 
  },
  rir: function() {
    console.log("HAHAHAHHAAH")
  }
}

// Podemos acessar a propriedade usando o nome do objeto mais o nome da propriedade.
pessoa.nome 
pessoa.idade

// Podemos executar um metodo usando o nome do objeto mais o nome do metodo
pessoa.falar() 
pessoa.rir()
```
## Links para se aprofundar

 [Objeto, noções básicas - Documentação](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript/Objetos/B%C3%A1sico)

 [Trabalhando com classes e objetos em JavaScript](https://www.devmedia.com.br/poo-trabalhando-com-classes-e-objetos-em-javascript/28434)

 [JavaScript Objects - Documentação](https://www.w3schools.com/js/js_objects.asp)

# Objeto Date 

O objetivo do função Date é representar um único momento no tempo.Objetos Date são baseados no valor de tempo que é o número de milisegundos.

## Sintaxe 

Existem muitas formas de se instanciar o método `Date`:

### Javascript
```js	
new Date();  // Sem parâmetros
new Date(milissegundos);  // alor inteiro que representa a soma dos milissegundos
new Date(data); //  um texto representando uma data no formato específico, conhecido como Timestamp.

```

## Métodos 


### Javascript
```js	
getDay()  // Não retorna o dia do mês, mas sim o dia da semana.
getMonth()  // Retorna o mês atual, mas a contagem inicia em 0.
getYear() //   retorna a soma dos anos desde 1900.
```
## Links para se aprofundar

 [Javascript Date](https://www.devmedia.com.br/javascript-date-trabalhando-com-data-e-hora/40649)

 [Entendendo o Objeto Date()](http://www.linhadecodigo.com.br/artigo/1003/entendendo-o-objeto-date-do-javascript.aspx)

 [JavaScript Date Reference - Documentação](https://www.w3schools.com/jsref/jsref_obj_date.asp)

# Inner

## innerHTML

### HTML
```html
  <div id="displayText"></div>
```

### Javascript
```js
let displayText = document.querySelector('#displayText');
displayText.innerHTML = "<p>Texto que eu inseri no HTML</p>."
```

## innerText

### HTML
```html
    <div id="displayText"></div>
```

### Javascript
```js
let displayText = document.querySelector('#displayText');
displayText.innerText = "Texto que eu inseri no HTML."
```

# Cursos

 [Curso de javascript - Devmedia](https://www.devmedia.com.br/curso/introducao-a-linguagem-javascript/2330)

 [Cuso de javascript - Rocketseat](https://skylab.rocketseat.com.br/node/curso-java-script)

 [Curso de javascript/Gustavo Guanabara - Curso em video](https://www.youtube.com/watch?v=BXqUH86F-kA&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&t=0s)

# Sites com exercicos

 [Freecodecamp](https://www.freecodecamp.org/learn)

 [Hackerrank](https://www.hackerrank.com/dashboard)


# Livros

 [Enloquent javascript - 2 edição/Portugues ](https://braziljs.github.io/eloquente-javascript/) 

  [Enloquent javascript - 3 edição/Inglês ](https://eloquentjavascript.net)

  [Desenvolvimento Web com HTML, CSS e javascript](https://www.caelum.com.br/download/caelum-html-css-javascript.pdf)


# Atalho VSCODE
 
 [Emmet Documentation](https://docs.emmet.io/cheat-sheet/) 
 [HTML in Visual Studio Code](https://code.visualstudio.com/docs/languages/html) 
