const calcularDesconto = function(preco, porcentagem){
    const desconto = preco *(porcentagem / 100)
    return desconto;
}

console.log(`Chamando a função`);
console.log(`Desconto aplicado: R$ ${calcularDesconto(200,10)}`);
