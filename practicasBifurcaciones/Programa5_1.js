//Programa5_1
/*Realizar un programa que realice operaciones básicas matemáticas según el operador proporcionado (suma, resta, multiplicación, división)
NOTA: la división entre 0 debe marcar error*/

function calcular (dato1, dato2, operador) {
    let resultado

    switch(operador){
        case '+':
            resultado = dato1 + dato2;
            break;
        case '-':
            resultado = dato1 - dato2;
            break;
        case '*':
            resultado = dato1 * dato2;
            break;
        case '/':
            if (dato2 === 0) {
                console.log("error!");
            }
            resultado = dato1 / dato2;
            break;
        default:
            console.log("error! Ingrese un dato valido");
    }
     
    return resultado;
}

console.log(calcular(10, 5, '+'));
console.log(calcular(10, 5, '-'));
console.log(calcular(10, 5, '*'));
console.log(calcular(10, 5, '/'));
console.log(calcular(5, 0, '/'));
