/*Ejercicio 6
Dado un numero entre 1 y 7 escriba 
correspondiente dia de la semana asi:
Dia 1 Lunes, Dia 2 Martes, Dia 3 Miercoles, 
Dia 4 Jueves, Dia 5 Viernes, Dia 6 Sabado, Dia 7 Domingo,
 si se escribe otro numero diferente debe salir el mensaje 
 ESCRIBIO UN NUMERO FUERA DEL RANGO
 ESCRIBA UN NUMERO DE 1 Y 7*/

 /*var numero = parseInt(prompt("Ingrese un número del 1 al 7:"));

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
        alert("Dia 7: Domingo");+
        break;
    default:
        alert("Ha ingresado un número fuera del rango. Por favor, escriba un número del 1 al 7.");
    }*/

    let num=parseInt(prompt("ingrese un numero del 1 al 7"));

    if (num == 1){
    
    alert("el dia es lunes");

    } else if (num == 2){

        alert("el dia es martes");

    }else if (num == 3){

        alert("el dia es miercoles");
    
    }else if (num == 4){

        alert("el dia es jueves");

    } else if (num == 5){

        alert("el dia es viernes");

    }else if (num == 6){

        alert("el dia es sabado");

    }else if (num == 7){

        alert("el dia es domingo");

    } else {

        alert ("numero fuera de rango")
    }




