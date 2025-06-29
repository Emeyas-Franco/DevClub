/*

OPERADORES TERNÁRIO

é utilizado quando o if e o else não passa de 1 linha de código

? if (se)
: else (se não)
&& if (if sem o else)

*/
const salary = 11000

// if (salary <= 3000) {
//   console.log("O colaborador é Júnior")
// } else {
//   console.log("Ele é Pleno")
// }

salary <= 3000 ? console.log("O colaborador é Júnior") : console.log("O colaborador é Pleno")

salary <= 3000 && console.log("O colaborador é Júnior")

salary <= 3000 ? console.log("O colaborador é Júnior") : salary > 3000 && salary < 10000 ? console.log("O colaborador é Pleno") : console.log("O colaborador é Senior")