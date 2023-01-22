
primeiraFuncao();
dizerNome("Matheus")
dizerNome("Pedro")
dizerNome("Xavier")

var nomdeDoBandoDeDados = "João";

dizerNome(nomdeDoBandoDeDados);

var somaUm = soma(2,5)


console.log(somaUm);

var somaDois = soma(5,5)
console.log(somaDois);

console.log(soma(4,5));


function soma(a,b){
    var soma = a + b;
    return soma;
}

function dizerNome(nome) {
    
    console.log("O nome é: " + nome);
}

function primeiraFuncao() {
    
    console.log("Hello World das Funções");
}