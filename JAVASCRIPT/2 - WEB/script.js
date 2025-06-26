/*

document -> HTML

getElementById -> Trás UM elemento pelo ID
getElementByClassName -> Trás TODOS os elementos com essa CLASSE
getElementByTagName -> Trás TODOS os elementos com essa TAG
getElementByName -> Trás TODOS os elementos com esse NAME

querySelector -> Trás UM elemento, o PRIMEIRO que encontrar
querySelectorAll -> Trás TODOS os elementos que encontrar

*/

const number = document.getElementById("main-input")
const paragraphs = document.getElementsByClassName("paragraph-js") 
const button = document.getElementsByTagName("button")
const name = document.getElementsByName("name")
const elements = document.querySelector("#main-input")
const allElements = document.querySelectorAll(".paragraph-js")


elements.placeholder = "Number"
elements.value = 323232
console.log(elements.value)


/* 

ALTERNANDO E ACESSANDO TEXTOS

textContent -> Pega todo o conteúdo
innerText -> Pega APENAS o texto
innerHTML -> Permite adicionar HTML e texto

*/

const element = document.querySelector(".paragraph-js")

console.log(element.textContent) // SÓ HTML
console.log(element.innerText) // LEVA EM CONTA O CSS
console.log(element.innerHTML) // Trás TUDO, e permite adicionar tags HTML

// ALTERANDO ESTILO CSS

const button2 = document.querySelector(".main-button")

button2.style.color = "#852394"

/* EVENTOS */

const input = document.querySelector("#main-input")
const newElement = document.querySelector(".newText")

function cliqueiNoBotao() {
  newElement.innerHTML = `<strong>${input.value}</strong>`
}
