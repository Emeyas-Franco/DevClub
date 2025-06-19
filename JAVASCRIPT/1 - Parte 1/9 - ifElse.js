/*

CONTROLADOR DE FLUXO
  -IF (SE) -> Faça ISSO
  -ELSE (SE NÃO) -> Executa o ELSE

  OPERADORES DE COMPARAÇÃO
    > MAIOR QUE
    < MENOR QUE
    == IGUAL QUE

*/

const notaDoAluno = 5.1
const notaDeCorte = 5

if (notaDoAluno > notaDeCorte) {
  // O QUE SERÁ EXECUTADO, SE O IFF FOR VERDADEIRO
  console.log(`Parabéns você foi APROVADO!`)
} else {

  //SE O IF FOR FALSO, ELE ENTRA AQUI
  console.log(`Você foi REPROVADO!`);
};