const minhaString = 'JavaScript, a lingugagem da Internet!';
console.log(minhaString);
console.log(minhaString[3]); //retorna a letra no índice 3 "jav(a)"

// tamanho da String
console.log(minhaString.length);

// maiúsculas
console.log(minhaString.toUpperCase());

// minúsculas
console.log(minhaString.toLocaleLowerCase());

//charAT() | mesma coisa que o array
console.log(minhaString.charAt(9));

// verificar se ele encontra algum valor (-1 é porque não existe)
console.log(minhaString.indexOf('S'));
console.log(minhaString.indexOf('s'));

const string1 = 'abc';
const string2 = 'def';
const string3 = 'xyz';

// concatenar strings
console.log(string1.concat(string2).concat(string3));
let todasStrings = string1.concat(string2).concat(string3);
console.log(todasStrings);

console.log(minhaString);
// substituir caracter = APENAS UM
console.log(minhaString.replace('a', '@'));

// substituir caracter = APENAS TODOS
console.log(minhaString.replaceAll('a', '@'));

// pegando uma parte da String
console.log(minhaString.substring(5, 20));

// riando uma nova string - com uma parte de outra string
let novaString = minhaString.slice(12,38);
console.log(novaString);

// converter String em Array
console.log(typeof minhaString);
console.log(minhaString.split(''));

// retirar espaços no início e no fim da string
let novaString2 = '     oi, tenho espaço no início e no fim   ';
console.log(novaString2);
console.log(novaString2.trim());


// buscar algo na string - retorno true / false
console.log(minhaString.includes('Script'));

// procurar do início - Começa com a string
console.log(minhaString.startsWith('Java'));

// procurar do fim - Termina a String
console.log(minhaString.endsWith('Internet!'));
