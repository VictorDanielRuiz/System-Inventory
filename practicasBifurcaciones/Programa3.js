//Programa3
/*Realizar un programa que calcule el descuento de una compra dependiendo de los artículos comprados: de 6-10 artículos 5% off, de 11-20 artículos 10% off,
y arriba de 20 artículos el 15% off. Si no alcanzara los 5 artículos no hay descuento*/

let compra = 1;

if (compra >=0 && compra <=5){
    console.log("Su compra no cumple los requisitos para aplicar descuento");
} else if (compra >=6 && compra <=10){
    console.log("Su compra aplica para descuento del 5%");
} else if (compra >=11 && compra <=20) {
    console.log("Su compra aplica para descuento del 10%");
} else if (compra >20) {
    console.log("Su compra aplica para descuento del 15%")
}