// Sortear um número para a exibição de um produto dentro do case
const codigo = Math.ceil(Math.random()* 6 );
console.log(codigo);

//varriáveis
let produto;
let categoria;
let preco;

//switch
switch (codigo) {
    case 1:
        produto = 'Notebook';
        categoria = 'Informática';
        preco = 8500.12;
        break;
    case 2:
        produto = 'Tablet';
        categoria = 'Informática';
        preco = 3800.93;
        break;
    case 3:
        produto = 'Videogame';
        categoria = 'Entretenimento';
        preco = 3500.46
        break;
    case 4:
        produto = 'Celular';
        categoria = 'Telefonia';
        preco = 5230.89
        break;
    case 5:
        produto = 'Teclado + Mouse';
        categoria = 'Acessórios';
        preco = 215.99
    default:
        produto = 'Drone';
        categoria = 'Tecnologia';
        preco = 9123.45;
}

//Exibição
console.log(`Código Sorteado: ${codigo}`);
console.log(`Nome do produto: ${produto}`);
console.log(`Categoria do produto ${categoria}`);
console.log(`Preço do produto: ${preco}`);


