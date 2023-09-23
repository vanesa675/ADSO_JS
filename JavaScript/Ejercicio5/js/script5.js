//Dado el peso de una persona: a. Si el peso es menor o igual a 40 kg. Muestre el mensaje “persona baja de peso”. b. si el peso es entre 41 kg y 70 kg. Muestre el mensaje “persona peso promedio. c. si el peso es mayor a 71 kg. Muestre el mensaje “persona con sobre peso

let peso = prompt("Ingrese su peso:");

if (peso <= 40) {
  
  alert("persona baja de peso");
} else if (peso >= 41 && peso <= 70) {
  
  alert("persona peso promedio");
} else {
  
  alert("persona con sobre peso");
}
