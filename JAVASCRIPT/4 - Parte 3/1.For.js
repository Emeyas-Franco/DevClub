/*

ESTRUTURA DE REPETIÇÃO - LOOP

  1) INICIALIZAÇÃO - Criar uma variável e colocar um valor inicial para ela
  2) CONDIÇÃO - Enquantor for true, o laço continuará iterando.
                Ele irá verificar antes de cada iteração
  3) EXPRESSÃO FINAL - O que irá ocorrer a cada vez qaue o nosso laço der uma volta

  for ([inicialização]; [condição]; [expressão final]){
    seu código aqui
  }

*/

// for(let i = 0; i < 7; i++) {
//   console.log(i)
// }

const users = [
  "Amanda",
  "Emeyas",
  "Allykan",
  "Lymara",
  "Eurilena",
  "Kâe",
  "Lyara",
  "Kae",
  "Maria Aparecida",
  "Maria Vitória",
  "Ataides",
  "Alexhander",
  "Diego",
  "Thiago",
  "Pedro",
  "Raul",
  "Leandro",
]
for (let i = 0; i < users.length; i++) {
  console.log(users[i])
}