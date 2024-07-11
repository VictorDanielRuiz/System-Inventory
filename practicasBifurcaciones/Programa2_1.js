//Programa2_1
/*Realizar un programa que muestre los días de la semana de acuerdo a los números del 1 al 7. Ejemplo: 1 = Lunes, 
2 =martes... */

let DiasDeLaSemana = 1;

switch(DiasDeLaSemana){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("error!")
        break;   
}