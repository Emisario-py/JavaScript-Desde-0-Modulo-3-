// Combinando while y for con arreglos

//Ejemplo 1: Recorre un arreglo con while

let frutas = ["Manzana", "Uva", "Fresa", "Cereza", "Pera"];
let index = 0
console.log("while");
while(index < frutas.length){
    console.log("fruta", index, ":", frutas[index]);
    index++;
}

console.log("for");
//Ejemplo 2: Recorrer un arreglo con for
for(let index = 0; index < frutas.length; index ++){
    console.log("fruta", index, ":", frutas[index]);

}

let suma = 0;
let numero = 1;

while(suma<5){
    suma += numero;
    numero++
    console.log('Dentro del ciclo')
}

for(let i = 1; i<=5; i++){
    suma += i;
}

console.log(suma)