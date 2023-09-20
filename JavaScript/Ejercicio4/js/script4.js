//Que lea 2 números y los imprima en forma ascendente.

var num1 = parseFloat(prompt("Ingrese el primer número:"));

var num2 = parseFloat(prompt("Ingrese el segundo número:"));

if (!isNaN(num1) && !isNaN(num2)) {
  
  if (num1 < num2) {
    alert("Los números en orden ascendente son: " + num1 + ", " + num2);
  } else if (num1 > num2) {
    alert("Los números en orden ascendente son: " + num2 + ", " + num1);
  } else {
    alert("Los números son iguales: " + num1 + " = " + num2);
  }
} else {
  alert("Uno o ambos de los valores ingresados no son números válidos.");
}


