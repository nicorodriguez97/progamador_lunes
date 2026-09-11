function calcularPromedio(nota1, nota2) {

    let resultado = (nota1 + nota2) / 2;
    return resultado;

    const primerCuatrimestre = 9;
    const segundoCuatrimestre = 7;

    const promedioFinal = calcularPromedio(primerCuatrimestre, segundoCuatrimestre);

    console.log(`El promedio final de Historia es: ${promedioFinal}`);