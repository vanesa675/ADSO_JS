/*Ejercicio 10 
Hacer un programa que calcule el total a pagar 
por la compra de 3 camisas o mas, se aplica un descuento
del 20% sobre el total de la compra y si son
menos de 3 camisas un descuento de 10%*/

var cantidadCamisas = parseInt(prompt("Ingrese la cantidad de camisas que desea comprar:"));
var precioPorCamisa = parseInt(prompt("Ingrese el precio por camisa en pesos:"));

if (!isNaN(cantidadCamisas) && !isNaN(precioPorCamisa)) {
    var totalSinDescuento = cantidadCamisas * precioPorCamisa;
    var descuento;

    if (cantidadCamisas >= 3) {
       
        descuento = totalSinDescuento * 0.20;
    } else {
        
        descuento = totalSinDescuento * 0.10;
    }

    var totalAPagar = totalSinDescuento - descuento;

    alert("El total a pagar es: $" + totalAPagar);
} else {
    alert("Por favor, ingrese valores válidos.");
}


