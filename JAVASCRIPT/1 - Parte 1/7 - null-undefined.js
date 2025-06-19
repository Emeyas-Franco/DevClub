// 5. NULL & UNDEFINED

const pessoa = {
  name: "Emeyas Franco Simas",
  age: 30,
  email: "emeyasdev@gmail.com",
  conjuge: false,
  nomeDoConjuge: null,
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

pessoa.conjuge = true
pessoa.nomeDoConjuge = "Amanda Julyana Brito Santos"

console.log(pessoa.brazil)
