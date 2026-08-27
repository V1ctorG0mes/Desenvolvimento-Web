// declarar um objeto
const produto = {
    nome: 'Notebook',
    preco: 5500,
    estoque: 25,
    exibirProduto: function(){
        console.log(`Produto: ${this.nome} - Preço R$ ${this.preco} - Estoque: ${this.estoque}`);
        
    }

}

// declarar um objeto
const cliente = {
    nome: 'Eu mesmo',
    email: 'eumesmo@eumesmo.com',
    idade: 28,
    exibirCliente: function(){
        console.log(`Cliente: ${this.nome} - Email: ${this.email} - Idade: ${this.idade}`);
        
    }
}

// declarar um objeto sem função
const pedido = {
    id: 987654,
    produto: 'Tablet',
    quantidade: 2
}

//exibindo as propriedades
console.log(`Produto: ${produto.nome}`);
console.log(`Cliente: ${cliente.nome}`);
console.log(`Pedido: ${pedido.id}`);

// Executar as funções dos objetos
produto.exibirProduto();
cliente.exibirCliente();
