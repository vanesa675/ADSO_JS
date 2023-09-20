//Dadas las 3 calificaciones que el estudiante obtuvo en un uso: a. determinar su promediob. b. indicar si el estudiante aprobó o no aprobó el curso. Las notas deben ser del 1 a 10 y aprueba con un promedio mayor de seis 

let claf = prompt ("ingrese las calificaciones")
let clf = prompt ("ingrese la calificacion")
let calf = prompt ("ingrese la calificacion")
let pro = 55/100
let prom = 15/100
let prm = 30/100
let gan = parseInt(claf*pro)
let ganal = parseInt(clf*prom)
let gen = parseInt(calf*prm)
let fin = parseInt(gan+ganal+gen)

alert("su calificacion de la materia es " + fin)

if (fin >=7){
    alert("Aprobado");
} else if(fin <=7){
    alert("Reprobado")
}