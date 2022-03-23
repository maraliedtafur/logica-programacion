/*
Cree un algoritmo que permita calificar
 la nota de un alumno en letras
*/

let nota = 42;
let notaLetra = '';

if(nota > 100){
    console.log('Esta fuera de rango');
}
else if(nota >= 90){
    notaLetra = 'A';
}
else if(nota >= 80){
    notaLetra = 'B';
}
else if (nota >= 70) {
    notaLetra = 'C';
}
else if (nota >= 60) {
    notaLetra = 'D';
}
else if (nota < 60){
    notaLetra = 'F';
} 
console.log(nota + ' es igual a: ' + notaLetra);


