/*Ejercicio 9 
Programa que lea los nombres y edades de dos personas 
e imprima cual de ellas tiene mas edad*/

var nombre1 = prompt("Ingrese el nombre de la primera persona:");
var edad1 = parseInt(prompt("Ingrese la edad de la primera persona:"));

var nombre2 = prompt("Ingrese el nombre de la segunda persona:");
var edad2 = parseInt(prompt("Ingrese la edad de la segunda persona:"));

if (!isNaN(edad1) && !isNaN(edad2)) {
    if (edad1 > edad2) {
        alert(nombre1 + " es mayor en edad que " + nombre2 + ".");
    } else if (edad1 < edad2) {
        alert(nombre2 + " es mayor en edad que " + nombre1 + ".");
    } else {
        alert(nombre1 + " y " + nombre2 + " tienen la misma edad.");
    }
} else {
    alert("Por favor, ingrese edades válidas.");
}


