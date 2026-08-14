// mostrando concatenação básica

let nome = 'Israel';
let profissao = 'professor';
let logado = true;

/*
não faça assim:
console.log('Nome: ' + nome + ', profissão: ' + profissao);
*/


// Template String
console.log(`Nome: ${nome} - Profissão: ${profissao} - Logado: ${logado}`);

const resultado = `Nome: ${nome} - Profissão: ${profissao}`
console.log(resultado);
