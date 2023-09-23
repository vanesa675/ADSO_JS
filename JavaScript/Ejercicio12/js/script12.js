/*Ejercicio 12 
Realizar un calculadora con las operaciones basicas*/

// Función para sumar dos números
function sumar(numero1, numero2) {
    return numero1 + numero2;
}

// Función para restar dos números
function restar(numero1, numero2) {
    return numero1 - numero2;
}

// Función para multiplicar dos números
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

// Función para dividir dos números
function dividir(numero1, numero2) {
    if (numero2 !== 0) {
        return numero1 / numero2;
    } else {
        return "Error: No se puede dividir por cero.";
    }
}

// Función principal para realizar operaciones
function calcular() {
    var operacion = prompt("Ingrese la operación (+, -, *, /):");
    var numero1 = parseFloat(prompt("Ingrese el primer número:"));
    var numero2 = parseFloat(prompt("Ingrese el segundo número:"));

    var resultado;

    switch (operacion) {
        case "+":
            resultado = sumar(numero1, numero2);
            break;
        case "-":
            resultado = restar(numero1, numero2);
            break;
        case "*":
            resultado = multiplicar(numero1, numero2);
            break;
        case "/":
            resultado = dividir(numero1, numero2);
            break;
        default:
            resultado = "Operación no válida.";
    }

    alert("Resultado: " + resultado);
}

// Llama a la función principal para iniciar la calculadora
calcular();