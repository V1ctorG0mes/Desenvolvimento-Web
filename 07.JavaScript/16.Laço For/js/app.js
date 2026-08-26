let totalsoma = 0;
let numerosSorteados;

// criar o loop - sortear 100 números e soma-los
for(let i = 0; i <= 99; i++){
    // sorteando os números
    numerosSorteados = Math.ceil(Math.random()*100)

    //somatória dos números sorteados
    totalsoma+=numerosSorteados;

    //exibir os números sorteados
    console.log(numerosSorteados);
    
}

// Exibição da Soma
console.log(`Total da somatória dos números = ${totalsoma}`);
