// iniciando o método Contrutor
let dataAtual = new Date();
console.log(dataAtual);

// pegando partes do objeto para exibir partes da data
// milisegundos
console.log(dataAtual.getTime());

// dia da semana (funciona como uma array, domingo é o dia 0)
console.log(dataAtual.getDay());

// dia do mes
console.log(dataAtual.getDate());

// mês atual (funciona como uma array, janeiro é o mês 0)
console.log(dataAtual.getMonth()+1);

// ano
console.log(dataAtual.getFullYear());

// hora 
console.log(dataAtual.getHours());

// minutos
console.log(dataAtual.getMinutes());

// segundos
console.log(dataAtual.getSeconds());




// alterar data
// alterar o ano
dataAtual.setFullYear(2025)
console.log(`Ano alterado: ${dataAtual.getFullYear()}`);

// alterar o mês
dataAtual.setMonth(11)
console.log(`Mês alterado: ${dataAtual.getMonth()}`);

// alterar o dia do mês
dataAtual.setDate(31);
console.log(`Dia alterado: ${dataAtual.getDate()}`);

// alterar horas
dataAtual.setHours(20)
console.log(`Hora alterada: ${dataAtual.getHours()}`);

// alterar minutos
dataAtual.setMinutes(10)
console.log(`Minuto alterado: ${dataAtual.getMinutes()}`);

// alterar segundos
dataAtual.setSeconds(15)
console.log(`Segundos Alterados: ${dataAtual.getSeconds()}`);





dataAtual = new Date();
console.log(dataAtual);

// Exibir a data no formato Brasil
const dataPadraoBR = new Intl.DateTimeFormat('pt-BR').format(dataAtual);
console.log(dataPadraoBR);

// formato personalizado
const dataPersonalizada = new Intl.DateTimeFormat(('pt-BR'), {
    day: "2-digit",
    month: "long",
    year: "numeric"
}).format(dataAtual)

console.log(dataPersonalizada);


// formato data e hora
const dataHoraCompleta = new Intl.DateTimeFormat(('pt-BR'), {
    dateStyle: 'full',
    timeStyle: 'medium'
}).format(dataAtual)

console.log(dataHoraCompleta);

