// 10 -> Crie um objeto const chamado employee com as propriedades name (string) e contact (um objeto com as propriedades email e phone). Imprima o email do employee no console.

const employee = {
  name: "Amanda Julyana",
  contact: {
    email: `amandaj@email.com`,
    fone: `(62) 99999-9999`
  }
}

console.log(employee.contact.email)

// 11 -> Atualize a propriedade number do objeto address dentro do objeto pessoa (do arquivo 6 - object.js) para um novo valor. Imprima o objeto pessoa inteiro após a atualização.

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

pessoa.address.number = 35

console.log(pessoa)