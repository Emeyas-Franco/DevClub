/* EVENTOS */

const input = document.querySelector("#mainInput")
const select = document.querySelector("select")
const button = document.querySelector(".mainButton")
const newDiv = document.querySelector(".new")
function troqueiValor() {
  newDiv.innerHTML = input.value
}

button.addEventListener("click",troqueiValor)
