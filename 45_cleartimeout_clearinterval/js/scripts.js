//clearTimeout

var x = 0;

var myTimer = setTimeout(function () {
    console.log("O x é 0");
}, 1500)

var x = 5;
if (x > 0) {
    clearTimeout(myTimer);
    console.log("O x passou de 0");
}

// clearInterval na prática 

var myInterval = setInterval(function () {
    console.log("Imprimindo interval");
}, 500)

setTimeout(function () {
    console.log("Não precisamos mais repetir");
    clearInterval(myInterval);
}, 1500)

var x = 10;

var myInterval2 = setInterval(function () {

    console.log("Contagem regressiva: " + x);
    document.write("<p>Contagem regressiva: " + x + "<br></p>")

    x -= 1
    if (x == 0) {
        clearInterval(myInterval2)
        var paragrafo = document.querySelectorAll("p");
        for (i = 0; i <= paragrafo.length; i++)
            paragrafo[i].style.color = "blue";
    }
}, 100)

