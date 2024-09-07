/* Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado: • SP – R$67.836,43 • RJ – R$36.678,66 • MG – R$29.229,88 • ES – R$27.165,48 • Outros – R$19.849,53
Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. */

const dados = [
  {
    estado: "SP",
    valor: 67836.43,
  },
  {
    estado: "RJ",
    valor: 36678.66,
  },
  {
    estado: "MG",
    valor: 29229.88,
  },
  {
    estado: "ES",
    valor: 27165.48,
  },
  {
    estado: "Outros",
    valor: 19849.53,
  },
];

function mostrarDados(dados) {
  for (let i = 0; i < dados.length; i++) {
    console.log(
      `Estado: ${dados[i].estado} - Faturamento..: R$ ${dados[i].valor}`,
    );
  }
}

function totalFaturamento(dados) {
  let total = 0;
  for (let i = 0; i < dados.length; i++) {
    total += dados[i].valor;
  }
  return total;
}

function programa() {
  mostrarDados(dados);
  const total = totalFaturamento(dados);
  console.log(`Total faturamento: R$ ${total.toFixed(2)}`);

  console.log("PORCENTAGENS POR ESTADO");
  for (let i = 0; i < dados.length; i++) {
    console.log(
      `${dados[i].estado} - ${((dados[i].valor / total) * 100).toFixed(2)}%`,
    );
  }
}

programa();
