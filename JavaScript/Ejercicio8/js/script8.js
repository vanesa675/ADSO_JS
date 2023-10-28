/*Ejercicio 8
Un obrero necesita calcular su salario semanal, 
el cual se obtiene de la siguiente manera
-Si trabaja 40 horas o menos se le paga 16.000 por hora.
-Si trabaja mas de 40 horas se le paga 20.000 por hora*/

/*let horasTrabajadas = parseInt(prompt("Ingrese la cantidad de horas trabajadas en la semana:"));

    var tarifaPorHora;
    var salario;

    if (horasTrabajadas <= 40) {
        tarifaPorHora = 16000; 
        salario = horasTrabajadas * tarifaPorHora;
        alert (salario)
    } else if (horasTrabajadas >40){
        tarifaPorHora = 20000; 
        salario = (horasTrabajadas*tarifaPorHora); 
        alert("El salario semanal del obrero es: $" + salario);

    } else {
        alert("Por favor, ingrese un número válido de horas trabajadas.");
    }*/
    
// Función para convertir unidades de longitud y mostrar el resultado en un alert


/*function convertirLongitudYAlert(valor, unidadOrigen, unidadDestino) {
    const factoresConversion = {
        km: {
            hm: 10,
            dam: 100,
            m: 1000,
            dm: 10000,
            cm: 100000,
            mm: 1000000
        },
        hm: {
            km: 0.1,
            dam: 10,
            m: 100,
            dm: 1000,
            cm: 10000,
            mm: 100000
        },
        dam: {
            km: 0.01,
            hm: 0.1,
            m: 10,
            dm: 100,
            cm: 1000,
            mm: 10000
        },
        m: {
            km: 0.001,
            hm: 0.01,
            dam: 0.1,
            dm: 10,
            cm: 100,
            mm: 1000
        },
        dm: {
            km: 0.0001,
            hm: 0.001,
            dam: 0.01,
            m: 0.1,
            cm: 10,
            mm: 100
        },
        cm: {
            km: 0.00001,
            hm: 0.0001,
            dam: 0.001,
            m: 0.01,
            dm: 0.1,
            mm: 10
        },
        mm: {
            km: 0.000001,
            hm: 0.00001,
            dam: 0.0001,
            m: 0.001,
            dm: 0.01,
            cm: 0.1
        }
    };

    if (!factoresConversion[unidadOrigen] || !factoresConversion[unidadDestino]) {
        alert("Unidad de longitud no válida");
        return;
    }

    const factor = factoresConversion[unidadOrigen][unidadDestino];
    const resultado = valor * factor;

    alert(`${valor} ${unidadOrigen} es igual a ${resultado.toFixed(2)} ${unidadDestino}`);
}

// Ejemplo de uso
const valor = parseFloat(prompt("Ingrese un valor:"));
const unidadOrigen = prompt("Seleccione la unidad de origen (km, hm, dam, m, dm, cm, mm):");
const unidadDestino = prompt("Seleccione la unidad de destino (km, hm, dam, m, dm, cm, mm):");

convertirLongitudYAlert(valor, unidadOrigen, unidadDestino);*/
    
    
// Función para determinar si un número es par o impar

/*let numero = parseFloat(prompt("ingrese un numero"));

    if (numero % 2 == 0) {
      alert("Es un número par");
    } else {
      alert("Es un número impar");
    }*/

let nom = prompt("ingrese su nombre");
let edad = prompt(" ingrese su edad");
let gen = prompt("ingrese su genero")

if (edad >= 18 && gen === "masculino"){
    alert("usted es un hombre mayor de edad");
} else if (edad >= 18 && gen === "femenino"){
    alert("usted es una mujer mayor de edad");
} else if ( edad < 18 && gen === "masculino"){
    alert("usted es un hombre menor de edad");
} else (edad < 18 && gen === "femenino"){
    alert("usted es una mujer menor de edad");
}


