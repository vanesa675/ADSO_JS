/*Ejercicio 6
Dado un numero entre 1 y 7 escriba 
correspondiente dia de la semana asi:
Dia 1 Lunes, Dia 2 Martes, Dia 3 Miercoles, 
Dia 4 Jueves, Dia 5 Viernes, Dia 6 Sabado, Dia 7 Domingo,
 si se escribe otro numero diferente debe salir el mensaje 
 ESCRIBIO UN NUMERO FUERA DEL RANGO
 ESCRIBA UN NUMERO DE 1 Y 7*/

 var numero = parseInt(prompt("Ingrese un número del 1 al 7:"));

switch (numero) {
    case 1:
        alert("Dia 1: Lunes");
        break;
    case 2:
        alert("Dia 2: Martes");
        break;
    case 3:
        alert("Dia 3: Miércoles");
        break;
    case 4:
        alert("Dia 4: Jueves");
        break;
    case 5:
        alert("Dia 5: Viernes");
        break;
    case 6:
        alert("Dia 6: Sábado");
        break;
    case 7:
        alert("Dia 7: Domingo");
        break;
    default:
        alert("Ha ingresado un número fuera del rango. Por favor, escriba un número del 1 al 7.");
}


