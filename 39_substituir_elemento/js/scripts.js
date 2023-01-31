//criar elemento
var el = document.createElement('h3');

el.classList = 'testando-classe';

var texto = document.createTextNode("Este é o texto do h3");

el.appendChild(texto);

console.log(el);

//selecionar o elemento que quero trocar

var title = document.querySelector('#title');

console.log(title);

//selecionar o elemento pai do el 

var pai = title.parentNode;

//trocar elementos
pai.replaceChild(el , title)