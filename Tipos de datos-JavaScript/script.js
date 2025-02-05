/* 
    TIPOS DE DATOS EN JAVASCRIPT
*/

// Tipo: Number (numero)
let edad = 25;
let precio = 100.50;
let puntos = 0;
let temperatura = -19;

// Tipo: String (Texto)
let nombre = "Emiliano"; //Con comillas dobles
let saludo = 'Holaaaa'; //Con comillas simples
let character = 'a';
let edadCadena = '25';

// Tipo: Boolean
let esMayor = true; //Verdadero
let tienePermiso = false; //Falso

// Tipo: Symbol (Identificador unico) (Se fija mas en el espacio que ocupan en memoria que en el valor que comparten)
let identificador1 = Symbol("id");
let identificador2 = Symbol("id");

// Tipo: BigInt (Numeros muy grandes)
let numeroGrande = 168154167163131636416n; //Notar la 'n' al final

// Tipo: Undefined (Valor No asignado)
var sinDefinir;

// Tipo NaN (Not a Number - Un no Numero, esto pasa cuando una operacion no es un numero valido)
var resultadoInvalido = "Hola" * 10;

/* 
    ¿Que es console.log?
    console.log se usa para mostrar valores en la consola del navegador.
    Es util para depurar y entender como funcionan las variables en el codigo.
*/
console.log(edad);
console.log(nombre);
console.log(esMayor);
console.log(identificador1);
console.log(numeroGrande);
console.log(sinDefinir);
console.log(resultadoInvalido);

/* 
    ¿Que es typeof?
    typeof nos permite conocer el tipo de dato de una variable.
    Es util para depuracion y validaciones de codigo.
*/
console.log(typeof edad);
console.log(typeof nombre);
console.log(typeof esMayor);
console.log(typeof identificador1);
console.log(typeof numeroGrande);
console.log(typeof sinDefinir);
console.log(typeof resultadoInvalido);