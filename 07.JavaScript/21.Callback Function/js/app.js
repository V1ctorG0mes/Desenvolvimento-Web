const calcularTotal = (valor, operacao) =>{
    const resultado = operacao(valor);
    return resultado;
};

const aplicarDesconto = (valor) => {
    return valor * 0.9; // Dá 10% de desconto
}

const aplicarMulta = (valor) => {
    return valor * 1.1; // Adiciona 10% de multa
}

const valor = 5800;
console.log(`Valor inicial = R$ ${valor}`);

//chamando as funções
console.log(`Valor com desconto = R$ ${calcularTotal(valor, aplicarDesconto)}`);
console.log(`valor com multa = R$ ${calcularTotal(valor, aplicarMulta)}`);

