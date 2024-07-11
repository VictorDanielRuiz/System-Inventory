//Programa5
/*Realizar un programa que realice operaciones básicas matemáticas según el operador proporcionado (suma, resta, multiplicación, división)
NOTA: la división entre 0 debe marcar error*/

function calcular(dato1, dato2, operador){
    let resultado

    if(operador === '+'){
        resultado = dato1 + dato2;
    } else if(operador === '-'){
        resultado = dato1 - dato2;
    } else if(operador === '*'){
        resultado = dato1 * dato2;
    } else if(operador === '/'){
        if(dato2 === 0){
            console.log("error!");
        }
        resultado = dato2 / dato1;
    } else { 
        console.log("error! ingrese un dato válido");
    }

    return resultado;
}

console.log(calcular(10, 5, '+'));
console.log(calcular(10, 5, '-'));
console.log(calcular(10, 5, '*'));
console.log(calcular(10, 0, '/' ));
console.log(calcular(10, 5, '/'));