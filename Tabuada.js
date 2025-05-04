let tabuada = Number(prompt('Digite o número que quer multiplicar: '));
let Multi = Number(prompt("Digite a quantidade de vezes que deseja multiplicar: "))

for (let a = 1; a <= Multi; a++) {
  alert(`${tabuada} x ${a} = ${tabuada * a}`);
}