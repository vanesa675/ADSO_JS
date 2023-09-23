/*Ejercicio 11
Leer dos numero; si son iguales que los multiplique,
si el primero es mayor que el segundo que lo reste y si no que lo sume.*/

var numero1 = parseFloat(prompt("Ingrese el primer número:"));
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));

if (!isNaN(numero1) && !isNaN(numero2)) {
    var resultado;

    if (numero1 === numero2) {
        // Si los números son iguales, multiplicarlos
        resultado = numero1 * numero2;
        alert("Los números son iguales. La multiplicación es: " + resultado);
    } else if (numero1 > numero2) {
        // Si el primer número es mayor, restarlos
        resultado = numero1 - numero2;
        alert("El primer número es mayor. La resta es: " + resultado);
    } else {
        // Si el segundo número es mayor, sumarlos
        resultado = numero1 + numero2;
        alert("El segundo número es mayor. La suma es: " + resultado);
    }
} else {
    alert("Por favor, ingrese números válidos.");
}

