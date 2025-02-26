let frutas = ["Manzana"]; //Creamos el arreglo
let otrasFrutas = ["Uva", "Aguacate"];
// Metodos comunes en arreglos

// .push() -> Agrega un elemento al final del arreglo
frutas.push("Peras");
frutas.push("Guayaba");
frutas.push(otrasFrutas); //-> lenght = 4 por que agrega todo el arreglo completo en la ultima posicion
console.log("Despues de push", frutas);

// .pop() -> Elimina el ultimo elemento del arreglo
console.log(frutas.pop()); // Obtengo el ultimo elemento y lo saco de la estructura
console.log("Despues de pop", frutas);

// .shift -> Elimina el primer elemento
console.log(frutas.shift());
console.log("Despues de shift", frutas);

// map() -> Crea un nuevo arreglo transformando cada elemento de mi arreglo

/* 
    .map() recorre cada elemento del arreglo original y devuelve un nuevo arreglo con los elementos transformados
    El arreglo original no se modifica
*/

// Ejemplo 1: Multiplicamos cada elemento (item) del arreglo por dos
let numeros = [1, 2, 3]
let numerosPorDos = numeros.map((numero) => numero * 2);

console.log("Numeros multiplicados por dos", numerosPorDos);

// Ejemplo 2: Convertir cada fruta en mayusculas
let frutasEnMayusculas = frutas.map((fruta) => fruta.toUpperCase());
console.log("Frutas en mayusculas", frutasEnMayusculas);

let frutasEnMiniscula = frutasEnMayusculas.map((fruta) => fruta.toLowerCase());
console.log("Frutas en minisculas", frutasEnMiniscula);

// .sort() -> Ordena los elementos del arreglo ya sea alfabetica o numerica

let verduras = ["Espinaca", "Zanahoria", "Calabaza"];
console.log(verduras.sort()); //Ordena el arreglo de manera alfabetica si no colocamos ningun argumento

// .sort() con numeros -> IMPORTANTE, si usamos sort directamente con numeros, los ordenara como texto
let numerosDesordenados = [11, 2, 9, 98, 21, 6 , 55];
console.log("Numeros ordenados incorrectamente", numerosDesordenados.sort());

// Para ordenar correctamente numeros, debemos proporcionar una funcion de comparacion
let numerosOrdenados = [11, 2, 9, 98, 21, 6 , 55];
console.log("Numeros ordenados corretamente", numerosOrdenados.sort((a, b) => a - b));


/* 
    La funcion de comparación toma dos numeros (a, b)
    -Si num1 es menor que num2, la resta da un numero negativo, entonces "a" va antes que "b"
    -Si num1 es mayor que num2, la resta da un numero positivo, entonces "a" va despues que "b"
    -Si num1 es igual que num2, la resta da 0 por lo que su orden no cambia
    Nota- Estas opciones se van a repetir en cada iteracion hasta que los numeros esten ordenados
*/

console.log("Numeros ordenados de menor a mayor", numerosOrdenados.sort((a, b) => b - a));
