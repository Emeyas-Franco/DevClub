// 4. OBJECT -> Objetos

const name = "Emeyas Franco"
const age = 39
const address = "Rua Jota, Numero Zero"

const pessoa = {
  name: "Emeyas Franco Simas",
  age: 30,
  address: {
    street: "Dos Bobos",
    number: 0,
    complement: "Quadra X Lote Y",
    city: "Goiânia",
    state: "Goiás",
    country: "Brasil"
  },
  cellPhone: "(62)98605-2988"
}
console.log(pessoa)

console.log(pessoa.name)

console.log(pessoa.address.city)

pessoa.address.number = 1

console.log(pessoa)
