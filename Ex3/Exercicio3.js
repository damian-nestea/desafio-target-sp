/* Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
   • O menor valor de faturamento ocorrido em um dia do mês;
   • O maior valor de faturamento ocorrido em um dia do mês;
   • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média; */

async function retornaDadosJson() {
  try {
    const response = await fetch("../data/dados.json");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erro ao carregar o JSON:", error);
    return [];
  }
}

function menorValor(dados) {
  let menor = { dia: 0, valor: Infinity };
  for (let i = 0; i < dados.length; i++) {
    if (dados[i].valor < menor.valor && dados[i].valor != 0) {
      menor.dia = dados[i].dia;
      menor.valor = dados[i].valor;
    }
  }
  return menor;
}

function maiorValor(dados) {
  let maior = { dia: 0, valor: 0 };
  for (let i = 0; i < dados.length; i++) {
    if (dados[i].valor > maior.valor && dados[i].valor != 0) {
      maior.dia = dados[i].dia;
      maior.valor = dados[i].valor;
    }
  }
  return maior;
}

function mediaMensal(dados) {
  let somaFaturamento = 0;
  let diasFaturados = 0;
  for (let i = 0; i < dados.length; i++) {
    if (dados[i].valor != 0) {
      somaFaturamento += dados[i].valor;
      diasFaturados++;
    }
  }
  return somaFaturamento / diasFaturados;
}

function diasAcimaFaturamentoMedio(dados, media) {
  let diasAcimaMedia = 0;
  for (let i = 0; i < dados.length; i++) {
    if (dados[i].valor > media) {
      diasAcimaMedia++;
    }
  }
  return diasAcimaMedia;
}

async function programa() {
  const dados = await retornaDadosJson();

  // O menor valor de faturamento ocorrido em um dia do mês;
  const menorFaturamento = menorValor(dados);
  console.log(
    `O dia com menor faturamento foi o dia ${menorFaturamento.dia}. Valor do faturamento foi de R$ ${menorFaturamento.valor}.`,
  );

  //  O maior valor de faturamento ocorrido em um dia do mês;
  const maiorFaturamento = maiorValor(dados);
  console.log(
    `O dia com maior faturamento foi o dia ${maiorFaturamento.dia}. Valor do faturamento foi de R$ ${maiorFaturamento.valor}.`,
  );

  //  Média mensal de faturamento
  console.log(" MÉDIA MENSAL DE FATURAMENTO");
  console.log(`R$ ${mediaMensal(dados).toFixed(2)}`);

  // Meses com faturamento diário superior à média mensal
  const diasAcimaMedia = diasAcimaFaturamentoMedio(dados, mediaMensal(dados));
  console.log(
    `Neste mês houve ${diasAcimaMedia} dias com faturamento acima da média mensal!`,
  );
}

programa();
