// Usando um método construtor 
/*
const pessoas = new Array('Eu', 'Tu', 'Ele', 'Nós', 'Vós', 'Eles');
console.log(pessoas);
*/

//Array
const carrinho = ['Notebook', 'Mouse', 'Teclado', 'Headset', 'Monitor'];

console.log(carrinho);
console.table(carrinho); // retorna uma tabela do array
console.log(carrinho[2]); // retorna o índice
console.log(carrinho[40]); // undefined

// alterar o índice 3 do array carrinho
carrinho[3] = 'Tablet'
console.table(carrinho);

// inserir no início do array
carrinho.unshift('Celular')
console.table(carrinho);

// apagar o primeiro índice
carrinho.shift();
console.table(carrinho);

// inserir no fim do array
carrinho.push('Celular')
console.table(carrinho);

// excluir o último valor do array
carrinho.pop()
console.table(carrinho);

// Copiar os índices 0 e 1 para um novo array
// const copiaArray = carrinho.slice(2); // começa no índice dois e só para no final
const copiaArray = carrinho.slice(0,2); // onde começa e quantidade
console.log(copiaArray);
console.log(carrinho);

// remover itens do array
const itemRemovido = carrinho.splice(2,2); // onde começa e quantidade
console.log(itemRemovido);
console.log(carrinho);

// inserir em qualquer parte
carrinho.splice(2,0, 'Teclado', 'Tablet', 'Mesa', 123); // esse splice não deleta nimguém, na verdade adiciona, pois o 0 seria a quantidade.
console.table(carrinho);


// ordenar o  array
carrinho.sort();
console.table(carrinho);

// inverter o array
carrinho.reverse();
console.table(carrinho);

// verificar se existe o mouse no array (true or false)
console.log(`Existe Mouse no array = ${carrinho.includes('Mouse')}`);

// verificar o índice do mouse no array
console.log(`Índice do Mouse = ${carrinho.indexOf('Mouse')}`);
