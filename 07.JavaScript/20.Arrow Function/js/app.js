const calcularParcelar = (valor, parcelas) => {
    return valor / parcelas;
};
console.log(`Valor da parcela > ${calcularParcelar(1000,5)}`);
