//adicionar atributos

var title = document.querySelector('#title');

title.setAttribute('class' , 'testando atributo')

var btn =  document.querySelector('#btn');

btn.setAttribute("disabled", "disabled");

var subtitle = document.querySelector('.subtitle');

subtitle.setAttribute('id', 'titulo-2');

//remover atributos

var lista = document.querySelector('#lista1');

lista.removeAttribute('id');