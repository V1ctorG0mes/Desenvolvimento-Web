let preco = 1200;
let desconto = 0;
let valorFinal = 0;

if (preco <= 1000){
    desconto = 5;
} else if (preco <= 3000){
    desconto = 15
} else if (preco <= 5000){
    desconto = 25;
} else {
    desconto = 30;
}
//calculando o valor do desconto
let valorDesconto =  (preco * desconto) / 100;

//calculando o valor final
valorFinal = preco - valorDesconto

// exibindo dados
console.log(`Preço do produto: ${preco}`);
console.log(`Desconto aplicado: ${desconto}%`);
console.log(`Valor do desconto: ${valorDesconto}`);
console.log(`Valor final: ${valorFinal}`);
