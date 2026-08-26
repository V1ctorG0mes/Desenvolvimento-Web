// Sortear 10 números pares
let totalSorteados = 0;

for(let i = 0; i <= 10; i++){
    let numerosSorteado = Math.ceil(Math.random()*100);
    totalSorteados++;
    while(numerosSorteado % 2 !== 0 ){
    numerosSorteado = Math.ceil(Math.random()*100);
    totalSorteados++;
    }
    console.log(`Número sorteado = ${numerosSorteado}`);
}

console.log(`Total de números sorteados: ${totalSorteados}`);

