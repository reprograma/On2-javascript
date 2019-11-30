let form = document.querySelector("#form")
/*
Através do formulario é possivel acessar os input que tem a propriedade name.
Por exemplo: name="username"

Dessa forma podemos acessar os inputs do fomulário com o seguintes comando
  form.nome-do-input / form.username
 
 Dado que acessamos o input podemos pegar o valor presente no mesmo
  com a propriedade value que sempre retornará uma string
 */

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