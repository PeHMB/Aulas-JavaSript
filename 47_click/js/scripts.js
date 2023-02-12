var btn = document.querySelector("#btn");

console.log(btn);

btn.addEventListener("click", function () {
    console.log("Clicou!!!");

    console.log(this);
    this.style.color = 'red';
})

//click afetando outos elementos

var title = document.querySelector("#title");

title.addEventListener("click", function () {
    var subtitle = document.querySelector(".subtitle");

    subtitle.style.display = "none"
})

title.addEventListener("dblclick", function () {
    var subtitle = document.querySelector(".subtitle");

    subtitle.style.display = "inline"
})

//double click

var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("dblclick", function () {

    title.style.display = 'none';

});