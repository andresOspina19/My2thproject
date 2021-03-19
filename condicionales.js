const prompt = require('prompt-sync')();
/*var horaDia= prompt("Ingrese la hora: ");

if ( horaDia <= 3 ){
    console.log("Está el equipo de futbol entrenando");
}
 else if ( (horaDia > 3) && (horaDia <= 6) ){
    console.log("Está el equipo de Futbol Americano ");
} 
else if ( (horaDia > 6) && (horaDia <=9) ){
    console.log("Está el equipo de atletismo");
}

switch(horaDia <= 3){
    case true :
        console.log ("Está el equipo de futbol entrenando");
    break;
    case false :
        console.log("Está entrenando otro equipo");
    break;
}*/

var deporte = (prompt("Ingrese el nombre del deporte: ")).toUpperCase;
switch (deporte) {
    case "FUTBOL":
        console.log("Horario: 1 a 3 PM");
        break;
    case "AMERICANO":
        console.log("Horario de 3 a 6PM");
        break;
    case "ATLETISMO":
        console.log("Horario: 6 a 9PM");
        break;
    default:
        console.log("Ingrese un deporte valido");
        break;
}