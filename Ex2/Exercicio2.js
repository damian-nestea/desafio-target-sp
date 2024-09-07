/* Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. */

function sequenciaFibonacci(numero) {
  let sequencia = [0, 1];
  while (sequencia[sequencia.length - 1] < numero) {
    let novoNumero =
      sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
    sequencia.push(novoNumero);
  }
  return sequencia;
}

function imprimirArray(array) {
  let arrayToString = array.join(", ");
  return arrayToString;
}

function programa() {
  let numero = +prompt(
    "Digite um número para verificar se pertence à sequência Fibonacci...",
  );

  if (numero < 0 || isNaN(numero)) {
    console.log("Digite um número válido (números naturais)!");
  } else {
    let sequencia = sequenciaFibonacci(numero);

    console.log("--------Sequência de Fibonacci--------");
    console.log(imprimirArray(sequencia));

    if (sequencia.includes(numero)) {
      console.log(`O número ${numero} pertence à sequência Fibonacci!`);
    } else {
      console.log(`O número ${numero} não pertence à sequência Fibonacci!`);
    }
  }
}

programa();
