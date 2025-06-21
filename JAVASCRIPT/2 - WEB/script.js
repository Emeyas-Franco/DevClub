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
