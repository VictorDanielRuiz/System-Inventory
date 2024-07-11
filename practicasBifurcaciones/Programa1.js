//Programa1
/*Realizar un programa que muestre una letra de acuerdo a la calificación obtenida. Si el alumno sacó de 90-100 mostrar
la letra "a", de 80-89 mostrar la letra "b", de 70-79 mostrar la letra "c", de 60-69 mostrar la letra "d", y si no se
encuentra en ese rango mostrar "f".*/

let calificacion = 90;

if (calificacion >= 90 && calificacion <=100){
    console.log("a");
} else if (calificacion >=80 && calificacion <=89) {
    console.log("b");
} else if (calificacion >=70 && calificacion <=79) {
    console.log("c");
} else if (calificacion >=60 && calificacion <=69) {
    console.log("d");
} else {
    console.log("f");
}

