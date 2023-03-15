import fs from "fs";

let dados;

try {
  const json = fs.readFileSync("dados.json", "utf8");
  dados = JSON.parse(json);
} catch (err) {
  console.error("Error reading JSON file:", err);
}

const dadosValidos = dados.filter((obj) => obj.valor !== 0);

const menorFaturamento = dadosValidos.reduce((min, obj) => obj.valor < min.valor ? obj : min);

const maiorFaturamento = dadosValidos.reduce((max, obj) => obj.valor > max.valor ? obj : max);

const lucroTotal = dados.reduce((total, obj) => total + obj.valor, 0)

const mediaMensal = lucroTotal / dadosValidos.length;

const lucroAcimaMedia = dadosValidos.filter((obj) => obj.valor > mediaMensal)

console.log(`O menor faturamento foi de R$${menorFaturamento.valor.toFixed(2)}, ocorrendo no dia ${menorFaturamento.dia}`);

console.log(`O maior faturamento foi de R$${maiorFaturamento.valor.toFixed(2)}, ocorrendo no dia ${maiorFaturamento.dia}`);

console.log(`Tivemos ${lucroAcimaMedia.length} dias com lucro acima da média mensal`)