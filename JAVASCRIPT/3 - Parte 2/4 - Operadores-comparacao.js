/* 

OPERADORES DE COMPARAÇÃO

== -> Igual // Compara o valor, mas não o tipo
=== -> TOTALMENTE IGUAL // Compara o VALOR e o TIPO

!= -> DIFERENTE // Ele compara o valor, mas não o tipo
!== -> TOTALMENTE Diferente // Compara o VALOR e o TIPO

*/

const firstNumber = 30
const seccondNumber = "30"

if(firstNumber === seccondNumber) {
  console.log("São iguais")
} else {
  console.log("Não são iguais")
}


if(firstNumber != seccondNumber) {
  console.log("Sim, são diferentes")
} else {
  console.log("Não, eles não são diferentes")
}