/* Escreva um programa que inverta os caracteres de um string. */

function inverterString(string) {
  let novaString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    novaString += string[i];
  }
  return novaString;
}

function programa() {
  const string = prompt("Digite uma string...");
  console.log(`A string digitada foi: ${string}`);
  console.log(`A string invertida é: ${inverterString(string)}`);
}

programa();
