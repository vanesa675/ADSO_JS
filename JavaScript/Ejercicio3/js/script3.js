//Dados 2 números A y B, determinar si A es mayor Menor o igual que B.


function compararNumeros(a, b) {
    if (a > b) {
        return "A es mayor que B";
    } else if (a < b) {
        return "A es menor que B";
    } else {
        return "A es igual a B";
    }
}

let A = prompt("Ingrese el valor de A");
let B = prompt("ingrese el valor de B");

var resultado= compararNumeros(A,B);

alert(resultado);