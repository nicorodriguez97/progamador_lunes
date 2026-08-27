const numeros = [21, 48, 455, 670, 708];
let mayor = numeros[0]; // Aca supuse que tenia que ser practicamente igual que el ejemplo en clase

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) { // Ya con "numeros[i]" no sabia, yo pensaba usar solo "numeros" pero claro toma un numero y lo va comparando con el resto y lo cambia hasta encontar al numero mayor
        mayor = numeros[i]; 
    }
}

console.log(`El número mayor es: ${mayor}`);