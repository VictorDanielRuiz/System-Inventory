//Programa4
/*Realizar un programa que calcule el precio final de una compra con descuento y agregue impuestos. De $0 a $599 no aplica, de  $600 a $999 el 5%, de $1000
a $1,999 el 10% y de $2,000 en adelante el 15%. Después calcular el IVA y aplicar al total (IVA 16%)
 */

function calcularPrecioFinal(precio){
    let descuento = 0;
    const IVA = 0.16;

    if(precio >=0 && precio <=599){
        descuento = 0;
        console.log("Su compra no aplica para descuento");
    } else if(precio >=600 && precio <=999){
        descuento = 0.05;
        console.log("Su compra aplica para descuento del 5%")
    } else if(precio >=1000 && precio <=1999){
        descuento = 0.10;
        console.log("Su compra aplica para descuento del 10%")
    } else if(precio >2000){
        descuento = 0.15;
        console.log("Su compra aplica para descuento del 15%")
    } else {
        console.log("Precio no válido")
    }

    let precioDescuento = precio - (precio * descuento);
    let precioFinal = precioDescuento + (precioDescuento * IVA);

    return precioFinal;
}

console.log(calcularPrecioFinal(500));
