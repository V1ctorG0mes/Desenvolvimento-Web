let carrinho = ['Notebook', 'Mouse', 'Teclado', 'Headset', 'Monitor'];
console.log(carrinho);

// Percorrer com o for
for(let i = 0; i < carrinho.length; i++){
    console.log(`Índice ${i} - ${carrinho[i]}`);
    
}

console.log(`----------------------------------`);

// Percorrer com o for in
for(let indice in carrinho){
    console.log(`Índice: ${indice} Produto: ${carrinho[indice]}`);
    
}

console.log(`----------------------------------`);

// Percorrer com o for of
for (let produto of carrinho){
    console.log(`Produto: ${produto}`);
    
}

console.log(`----------------------------------`);

// Percorrer com o for each
carrinho.forEach((produto, indice) => {
    console.log(`produto: ${produto} - Índice: ${indice}`);

})