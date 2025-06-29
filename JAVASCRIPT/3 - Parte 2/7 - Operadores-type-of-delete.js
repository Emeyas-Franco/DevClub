/*

OPERADORES TYPE OF e DELETE

typeof -> Tipo de dado
delete -> Deleta parametro do objeto

*/

const myObject = {
  name: "Emeyas",
  age: 30,
  address: "Rua 4, 1000"
}

const myNumber = 30

console.log(typeof myObject)
console.log(typeof myNumber)

delete myObject.address

console.log(myObject)