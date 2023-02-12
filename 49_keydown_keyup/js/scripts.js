//keydown
document.addEventListener("keypress", function (event) {

    console.log(event.key);
    if(event.key ==="Enter"){ 
    }

});

document.addEventListener("keyup", function (event) {
    
    if(event.key === "Enter"){
        console.log("Soltou o enter");
    }
});
