/*Ejercicio 8
Un obrero necesita calcular su salario semanal, 
el cual se obtiene de la siguiente manera
-Si trabaja 40 horas o menos se le paga 16.000 por hora.
-Si trabaja mas de 40 horas se le paga 20.000 por hora*/

var horasTrabajadas = parseInt(prompt("Ingrese la cantidad de horas trabajadas en la semana:"));

if (!isNaN(horasTrabajadas)) {
    var tarifaPorHora;
    var salario;

    if (horasTrabajadas <= 40) {
        // Si trabaja 40 horas o menos
        tarifaPorHora = 16000; // $16,000 por hora
        salario = horasTrabajadas * tarifaPorHora;
    } else {
        // Si trabaja más de 40 horas
        tarifaPorHora = 20000; // $20,000 por hora
        var horasExtras = horasTrabajadas - 40;
        salario = (40 * tarifaPorHora) + (horasExtras * (tarifaPorHora * 1.5)); // Tarifa de horas extras al 50% adicional
    }

    alert("El salario semanal del obrero es: $" + salario);
} else {
    alert("Por favor, ingrese un número válido de horas trabajadas.");
}


