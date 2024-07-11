//Programa1_1
/*Realizar un programa que muestre una letra de acuerdo a la calificación obtenida. Si el alumno sacó de 90-100 mostrar
la letra "a", de 80-89 mostrar la letra "b", de 70-79 mostrar la letra "c", de 60-69 mostrar la letra "d", y si no se
encuentra en ese rango mostrar "f".*/

let calificacion = 100;

switch(true){
    case (calificacion >=90 && calificacion <=100):
        console.log("a");
        break;
    case (calificacion >=80 && calificacion <=89):
        console.log("b");
        break;
    case (calificacion >=70 && calificacion <=79):
        console.log("c");
        break;
    case (calificacion >=60 && calificacion <=69):
        console.log("d");
        break;
    default:
        console.log("error!");
        break;
}