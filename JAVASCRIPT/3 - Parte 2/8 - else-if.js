/*

if (SE)
else (SE NÃO)
else if ()

*/

const temperature = 41

if (temperature === 36) {
  console.log("Você está saudável")
} else if (temperature > 36 && temperature <=40) {
  console.log("Você está com febre")
}else if(temperature > 40) {
  console.log("Você está com MUITA febre")
} else{
  console.log("Você está com hipotermia")
}