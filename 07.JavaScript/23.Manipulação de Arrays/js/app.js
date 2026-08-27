const precos = [3000, 150, 250, 1500, 5800, 2600, 400, 6900]
console.table(precos);


// FILTER = filtre valores maiores que 2500
const precosFiltrados = precos.filter(preco => preco >= 1500);
console.log(precosFiltrados);
console.table(precos);


// MAP = aplicar um desconto de 10% a todos valores
// Map é aplicado em todos os elementos do array
const precosComDescontos = precos.map(preco => preco * 0.9); // 10% de desconto
console.table(precosComDescontos);
console.table(precos);


// somar todos os elementos do array
let totalSoma = precos.reduce((acc, preco) => acc + preco, 0);
console.log(`Total da soma dos preços = ${totalSoma}`);
