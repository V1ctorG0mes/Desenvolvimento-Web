/*

// getElementById()
let card = document.getElementById("card-produto");
console.log("getElementById:", card);


// getElementsByClassName()
let itensClasse = document.getElementsByClassName("item");
console.log("getElementsByClassName:", itensClasse);


// getElementsByTagName()
let paragrafos = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragrafos);


// querySelector()
let titulo = document.querySelector(".titulo"); // primeiro elemento "titulo"
console.log("querySelector:", titulo);


// querySelectorAll()
let listaItens = document.querySelectorAll(".item");
console.log("querySelectorAll:", listaItens);


console.log("-------------------");


// exibindo conteúdo dos itens
listaItens.forEach(item => {
    console.log("Característica:", item.textContent);
});


console.log("-------------------");

*/

// className -> alterar as classes do card e do preço
let card = document.getElementById('card-produto');
card.className = 'bg-white p-6 rounded border-2 border-blue-500';
let preco = document.querySelector('.preco')
preco.className = 'text-blue-900 font-bold mb-4 text-xl';



// textContent alterar o texto do título
let titulo = document.querySelector('.titulo');
titulo.textContent = 'Notebook Gamer';



// cria um novo elemento
let novoItem = document.createElement('li');
novoItem.className = 'item';
novoItem.textContent = 'Placa de vídeo: RTX 4060';

// adiciona na lista
let lista = document.querySelector('ul');
lista.append(novoItem);



//remove() - remove o item sistema operacional
let listaItens = document.querySelectorAll('li');
listaItens[3].remove();