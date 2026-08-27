const distancia = 500000;

if (distancia <= 1000) {
    console.log("Medio de transporte: a pie");
} else if (distancia <= 10000) {
    console.log("Medio de transporte: bicicleta");
} else if (distancia <= 30000) {
    console.log("Medio de transporte: colectivo");
} else if (distancia <= 100000) {
    console.log("Medio de transporte: auto");
} else {
    console.log("Medio de transporte: avión");
}