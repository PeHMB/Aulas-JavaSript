var frase = "Está é a frase que vamos manipular";

var fraseCaixaAlta = frase.toUpperCase();


console.log(frase.toLowerCase());

console.log(fraseCaixaAlta.toLowerCase());

//trim

var nome = "          Matheus          ";

var nomeTrim = nome.trim();

console.log(nomeTrim);

//split

console.log(frase.split(" "));

var tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(", "));

//lastIndexOf

var fraseDois = "Eu quero a última palavra teste desta frase de teste";

console.log(fraseDois.lastIndexOf("teste"));

