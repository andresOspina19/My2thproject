const prompt = require('prompt-sync')();

var comprobacion=0;
console.log("PROGRAMA PARA SUMAR 2 NUMEROS");

function esnaider() {
    var resultado = a + b;
    return resultado;
}

while (comprobacion===0) {
    var a = parseInt(prompt("Ingrese el numero A: "));
    var b = parseInt(prompt("Ingrese el  numero B "));

    console.log(esnaider(a, b));
    comprobacion= parseInt(prompt("Ingrese 0 si quiere sumar 2 numeros de nuevo.\nIngrese 1 si desea finalizar.\n"));
}


