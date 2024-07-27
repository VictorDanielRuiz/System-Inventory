//comparación

if (5 == 5){
    console.log("5 igual que 5")
}

if (5 === 5){
    console.log("5 igual que 5")
}

let a = 5;
console.log(typeof a)
let b = "5";
console.log(typeof b)

if (a == b){
    console.log("a es igual a b");
}

if (a === b){
    console.log("a no es igual a b");
}

//distinto
let c = 10;
console.log(typeof c)
let d = 11;
console.log(typeof d)

if (c =! d){
    console.log("Distinto débil");
}

if (c ==! d){
    console.log("Distinto fuerte");
}

//mayor que, menor que

let max = 10;
let min = 5;

if (10 > 5) {
    console.log("10 es mayor que 5");
}

if (10 >= 5) {
    console.log("10 es mayor o igual que 5");
}

if (5 < 10) {
    console.log("5 es menor que 10");
}

if (5 <= 10) {
    console.log("5 es menor o igual que 10")
}