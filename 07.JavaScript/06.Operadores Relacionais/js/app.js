console.log('Operadores relacionais');

let primeiroValor = 100;
let segundoValor = 200;
let resultado;

console.log(`Primeiro Valor: ${primeiroValor}`);
console.log(`Segundo Valor: ${segundoValor}`);

// Maior que
resultado = primeiroValor > segundoValor;
console.log(`${primeiroValor} > ${segundoValor} = ${resultado}`);

// Maior ou igual a
resultado = primeiroValor >= segundoValor;
console.log(`${primeiroValor} >= ${segundoValor} = ${resultado}`);

// Menor ou igual a
resultado = primeiroValor < segundoValor;
console.log(`${primeiroValor} < ${segundoValor} = ${resultado}`);

// Igualdede
resultado = primeiroValor == segundoValor;
console.log(`${primeiroValor} == ${segundoValor} = ${resultado}`);

// Desigualdede
resultado = primeiroValor != segundoValor;
console.log(`${primeiroValor} != ${segundoValor} = ${resultado}`);

primeiroValor = 10;
segundoValor = '10';

// Igualdede
resultado = primeiroValor == segundoValor;
console.log(`${primeiroValor} == ${segundoValor} = ${resultado}`);

// CORRETA Igualdede
resultado = primeiroValor === segundoValor;
console.log(`${primeiroValor} === ${segundoValor} = ${resultado}`);

