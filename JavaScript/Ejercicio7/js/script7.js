/*Ejercicio 7
En un almacen se hace un 20% de descuento a los 
clientes cuya compra supere los 1000 pesos,
a los demas solo se le hace un 5% de descuento
¿Cual será la cantidad que pagara un persona por su compra?*/

var compra = parseInt(prompt("Ingrese el monto de la compra en pesos:"));

if (!isNaN(compra)) {
    if (compra > 1000) {
        // Aplicar un 20% de descuento
        var descuento = compra * 0.20;
    } else {
        // Aplicar un 5% de descuento
        var descuento = compra * 0.05;
    }

    var totalPagar = compra - descuento;

    alert("El monto a pagar después del descuento es: $" + totalPagar);
} else {
    alert("Por favor, ingrese un monto de compra válido.");
}


