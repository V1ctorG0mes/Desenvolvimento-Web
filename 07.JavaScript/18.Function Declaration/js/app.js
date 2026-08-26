function exibirMensagem() {
    // corpo da função
    console.log(`Olá, você acessou nossa página`);
    console.log(`Nova linha na função`);
    let resultado = 20 + 20;
    console.log(`Resultado da conta ${resultado}`);
    console.log(`--------------------------`); 
}
exibirMensagem();


function calcularTotal (preço = 0, quantidade = 0){
    const total = preço * quantidade;
    console.log(`Total da compra: R$ ${total}`);
    console.log(`--------------------------`); 
}
calcularTotal(50, 2);
calcularTotal(); // se o preço e quantidade não estiverem declarados como 0 na função retorna um NaN (not a number)

function calcularFrete(valorCompra = 0){
    if(valorCompra >= 200){
        return 0;
    } return 20;
}
let frete = calcularFrete(150);
console.log(`Valor do frete: ${frete}`);

frete = calcularFrete(2000)
console.log(`Valor do frete: ${frete}`);