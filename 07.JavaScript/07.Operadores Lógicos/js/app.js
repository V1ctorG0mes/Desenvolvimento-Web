console.log("Operadores lógicos")

let primeiroNumero = 10;
let segundoNumero = 20;

console.log(`Primeiro Número = ${primeiroNumero}`);
console.log(`Segundo Número = ${segundoNumero}`);

// Operador OU (||) = True pelo menos apenas uma resposta verdadeira
resultado = ((primeiroNumero > segundoNumero) || (segundoNumero > 5))
console.log(resultado);

// Operador E (&&) = True toda resposta verdadeira
resultado = ((primeiroNumero < segundoNumero) && (segundoNumero > 5))
console.log(resultado);

// Operador Não (!) (inverte o valor booleano) = Negação das respostas
resultado = !((primeiroNumero < segundoNumero) && (segundoNumero > 5))
console.log(resultado);
