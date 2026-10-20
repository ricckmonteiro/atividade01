const venda1 = Number(prompt("Vendas realizadas na semana 1"));
const venda2 = Number(prompt("Vendas realizadas na semana 2"));
const venda3 = Number(prompt("Vendas realizadas na semana 3"));
const venda4 = Number(prompt("Vendas realizadas na semana 4"));

const media = (venda1 + venda2 + venda3 + venda4) / 4;

console.log("Vendas da semana 1: R$ " + venda1.toFixed(2));
console.log("Vendas da semana 2: R$ " + venda2.toFixed(2));
console.log("Vendas da semana 3: R$ " + venda3.toFixed(2));
console.log("Vendas da semana 4: R$ " + venda4.toFixed(2));

console.log("Média semanal de vendas: R$ " + media.toFixed(2));