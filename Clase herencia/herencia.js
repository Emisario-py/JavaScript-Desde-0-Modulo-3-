// Herencia


// Paso 1. Creacion de la clase principal (Clase padre, superclase)
class Persona{
    constructor(nombre, edad, materias){
        // En el constructor inicializamos atributos de la clase
        this.nombre = nombre;
        this.edad = edad;
        this.materias = materias;
    }

    //Metodos de la clase
    saludar(nombrePersona){
        console.log('Hola', nombrePersona);
        return nombrePersona;
    }
}

let persona1 = new Persona('Papa', 30);
console.log(persona1)
// Paso 2. Crear una subclase(Estudiante)

class Estudiante extends Persona{
    constructor(nombre, edad, materias){
        //Para poder heredar los atributos de la clase padre, tengo que llamar primero al super constructor
        super(nombre, edad);
        this.materias = materias;
    }
    obtenerMaterias(){
        return this.materias;
    }
}
let estudiante1 = new Estudiante("Maria", 23, ["Ingles", "Matematicas"]);
console.log(estudiante1);
console.log(estudiante1.obtenerMaterias());

let estudiante2 = new Estudiante('Luis', 28);
console.log(estudiante2);

class EstudianteMusica extends Estudiante{
    // Llamo a el constructor de la clase padre de EstudianteMusica, que en este caso es Estudiante
    constructor(nombre, edad, materias, instrumento){
        super(nombre, edad, materias);
        this.instrumento = instrumento;
    }
    //Metodos
}

let estudianteMusica = new EstudianteMusica("Juan", 20, ["Musica", "Letras"], 'Guitarra')
console.log("Estudiante de musica", estudianteMusica.saludar("Felipe"))
console.log("Estudiante de musica", estudianteMusica);