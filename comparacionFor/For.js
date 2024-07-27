//FOR - ciclo de tipo bucle

/*for estructura
for(inicialización; condición; actualización){
    bucle
}

i = i +1;
i += 1;
i++
i--
*/

//for
for(let i = 0; i<10; i++){
    console.log(i);
}

let lista = [1, 2, 3, 4, 5, 6, 7];
for(let i = 0; i < lista.length /*longitud de la cadena*/; i++){
    console.log(lista[i]);
}

//for... of
for(let valor of lista){
    console.log(valor);
}

//forEach

//for... in