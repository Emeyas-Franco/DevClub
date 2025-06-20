// 15 -> Declare uma variável const temperature e atribua a ela um número. Escreva uma declaração if-else que imprima "Está quente!" se a temperature for maior que 25, e "Não está quente." caso contrário.

const temperature = 22


if(temperature > 25) {
  console.log(`Está quente!`)
} else {
  console.log(`Não está quente.`)
}

// 16 -> Explique o propósito das declarações if e else na programação.

// Declaração if é um controle de fluxo, SE uma condição for verdadeira o código é executado.
// Declaração else é caso a condição if for falsa, executa o código no else.

// 17 -> O que são "operadores de comparação" em JavaScript? Dê um exemplo de um.

// Operadores de comparação comparam dados entre maior (>), menor (<), igual (==) entre outros.

const estaQuente = temperature > 25
const estaFrio = temperature < 25

console.log(estaFrio)