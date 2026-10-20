const mes1 = Number(prompt(" Digite o consume do mês 1 em kWh:"));
const mes2 = Number(prompt(" Digite o consume do mês 2 em kWh:"));
const mes3 = Number(prompt(" Digite o consume do mês 3 em kWh:"));
const mes4 = Number(prompt(" Digite o consume do mês 4 em kWh:"));

const media = (mes1 + mes2 + mes3 + mes4) / 4;

const meta = 150;

console.log ("Consumo do mês 1: " + mes1.toFixed(2) + " kWh");
console.log ("Consumo do mês 2: " + mes2.toFixed(2) + " kWh");
console.log ("Consumo do mês 3: " + mes3.toFixed(2) + " kWh");
console.log ("Consumo do mês 4: " + mes4.toFixed(2) + " kWh");

console.log("Média de consumo mensal: " + media.toFixed(2) + " kWh");

if (media <= meta) {
console.log ("A família está dentro da meta de " + meta + " kWh por mês.");
} else {
    console.log("A família ultrapassou a meta de " + meta + " kWh por mês.");
}